import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Upload, 
  X, 
  Image as ImageIcon, 
  Video, 
  Music,
  AlertCircle,
  CheckCircle,
  Loader
} from 'lucide-react';
import toast from 'react-hot-toast';

const OrangeMediaUpload = ({ 
  onMediaSelect, 
  maxSize = 10, // MB
  acceptedTypes = {
    image: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
    video: ['video/mp4', 'video/avi', 'video/mov', 'video/webm'],
    audio: ['audio/mp3', 'audio/wav', 'audio/ogg', 'audio/m4a']
  },
  className = ''
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState(null);
  const [mediaType, setMediaType] = useState(null);
  const fileInputRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = async (files) => {
    const file = files[0];
    setError(null);

    // Validation de la taille
    if (file.size > maxSize * 1024 * 1024) {
      setError(`Le fichier est trop volumineux. Taille maximum: ${maxSize}MB`);
      toast.error(`Fichier trop volumineux (max ${maxSize}MB)`);
      return;
    }

    // Déterminer le type de média
    let detectedType = null;
    
    if (acceptedTypes.image.includes(file.type)) {
      detectedType = 'image';
    } else if (acceptedTypes.video.includes(file.type)) {
      detectedType = 'video';
    } else if (acceptedTypes.audio.includes(file.type)) {
      detectedType = 'audio';
    }

    // Validation du type
    if (!detectedType) {
      setError('Type de fichier non supporté. Formats acceptés: Images (JPEG, PNG, GIF, WebP), Vidéos (MP4, AVI, MOV, WebM), Audio (MP3, WAV, OGG, M4A)');
      toast.error('Type de fichier non supporté');
      return;
    }

    setMediaType(detectedType);
    setUploading(true);

    try {
      // Créer un aperçu selon le type de média
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target.result);
        setUploading(false);
        toast.success(`${detectedType === 'image' ? 'Image' : detectedType === 'video' ? 'Vidéo' : 'Audio'} uploadé avec succès !`);
        
        // Appeler la fonction de callback
        if (onMediaSelect) {
          onMediaSelect(file, e.target.result, detectedType);
        }
      };
      reader.readAsDataURL(file);
    } catch (err) {
      setError('Erreur lors du traitement du fichier');
      setUploading(false);
      toast.error('Erreur lors de l\'upload');
    }
  };

  const removeMedia = () => {
    setPreview(null);
    setError(null);
    setMediaType(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    if (onMediaSelect) {
      onMediaSelect(null, null, null);
    }
    toast.success('Média supprimé');
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={`w-full ${className}`}>
      <input
        ref={fileInputRef}
        type="file"
        accept={[...acceptedTypes.image, ...acceptedTypes.video, ...acceptedTypes.audio].join(',')}
        onChange={handleFileInput}
        className="hidden"
      />

      {/* Zone d'upload avec design orange original */}
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 cursor-pointer ${
          dragActive 
            ? 'border-orange-400 bg-orange-50' 
            : error 
              ? 'border-red-300 bg-red-50' 
              : 'border-gray-300 hover:border-orange-400 hover:bg-orange-50'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={openFileDialog}
      >
        {!preview && !uploading && !error && (
          <div>
            <Upload className="w-12 h-12 mx-auto mb-4 text-orange-600" />
            <p className="text-gray-600">Glissez une image, vidéo ou audio ici</p>
            <p className="text-sm text-gray-500 mt-2">
              Formats supportés: JPG, PNG, MP4, MP3, WAV
            </p>
          </div>
        )}

        {uploading && (
          <div>
            <Loader className="w-12 h-12 mx-auto mb-4 text-orange-600 animate-spin" />
            <p className="text-gray-600">Upload en cours...</p>
            <p className="text-sm text-gray-500 mt-2">
              Veuillez patienter pendant le traitement
            </p>
          </div>
        )}

        {preview && (
          <div className="relative">
            {mediaType === 'image' && (
              <div className="relative inline-block">
                <img
                  src={preview}
                  alt="Aperçu"
                  className="max-w-full max-h-48 rounded-lg shadow-lg"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeMedia();
                  }}
                  className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
            
            {mediaType === 'video' && (
              <div className="relative inline-block">
                <video
                  src={preview}
                  className="max-w-full max-h-48 rounded-lg shadow-lg"
                  controls
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeMedia();
                  }}
                  className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
            
            {mediaType === 'audio' && (
              <div className="bg-gray-100 p-4 rounded-lg shadow-lg max-w-md mx-auto">
                <div className="flex items-center space-x-3">
                  <Music className="w-8 h-8 text-orange-600" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 text-sm">Fichier Audio</h4>
                    <audio src={preview} controls className="mt-1 w-full" />
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeMedia();
                    }}
                    className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              </div>
            )}
            
            <div className="mt-4 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-sm text-green-600 font-medium">
                {mediaType === 'image' ? 'Image' : mediaType === 'video' ? 'Vidéo' : 'Audio'} uploadé avec succès
              </span>
            </div>
          </div>
        )}

        {error && (
          <div>
            <AlertCircle className="w-12 h-12 mx-auto mb-4 text-red-600" />
            <p className="text-red-600 font-medium mb-2">Erreur</p>
            <p className="text-red-600 text-sm mb-3">{error}</p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                openFileDialog();
              }}
              className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors text-sm"
            >
              Réessayer
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrangeMediaUpload;

