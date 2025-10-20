import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Upload, 
  X, 
  Image as ImageIcon, 
  Video, 
  Music,
  FileImage, 
  AlertCircle,
  CheckCircle,
  Loader,
  File,
  Play,
  Pause
} from 'lucide-react';
import toast from 'react-hot-toast';

const MediaUpload = ({ 
  onMediaSelect, 
  maxSize = 10, // MB
  acceptedTypes = {
    image: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
    video: ['video/mp4', 'video/avi', 'video/mov', 'video/webm'],
    audio: ['audio/mp3', 'audio/wav', 'audio/ogg', 'audio/m4a']
  },
  multiple = false,
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
    let acceptedTypesList = [];
    
    if (acceptedTypes.image.includes(file.type)) {
      detectedType = 'image';
      acceptedTypesList = acceptedTypes.image;
    } else if (acceptedTypes.video.includes(file.type)) {
      detectedType = 'video';
      acceptedTypesList = acceptedTypes.video;
    } else if (acceptedTypes.audio.includes(file.type)) {
      detectedType = 'audio';
      acceptedTypesList = acceptedTypes.audio;
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

  const getMediaIcon = (type) => {
    switch (type) {
      case 'image':
        return <ImageIcon className="w-8 h-8 text-green-600" />;
      case 'video':
        return <Video className="w-8 h-8 text-blue-600" />;
      case 'audio':
        return <Music className="w-8 h-8 text-purple-600" />;
      default:
        return <File className="w-8 h-8 text-gray-600" />;
    }
  };

  const getMediaLabel = (type) => {
    switch (type) {
      case 'image':
        return 'Image';
      case 'video':
        return 'Vidéo';
      case 'audio':
        return 'Audio';
      default:
        return 'Fichier';
    }
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Zone d'upload */}
      <div
        className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 ${
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
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={[...acceptedTypes.image, ...acceptedTypes.video, ...acceptedTypes.audio].join(',')}
          onChange={handleFileInput}
          multiple={multiple}
          className="hidden"
        />

        {!preview && !uploading && (
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Upload className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Glissez-déposez votre média ici
              </h3>
              <p className="text-gray-600 mb-4">
                ou{' '}
                <button
                  onClick={openFileDialog}
                  className="text-orange-600 hover:text-orange-700 font-medium"
                >
                  parcourez vos fichiers
                </button>
              </p>
              <div className="text-sm text-gray-500 space-y-1">
                <p>📷 Images: JPEG, PNG, GIF, WebP</p>
                <p>🎥 Vidéos: MP4, AVI, MOV, WebM</p>
                <p>🎵 Audio: MP3, WAV, OGG, M4A</p>
                <p>Taille maximum: {maxSize}MB</p>
              </div>
            </motion.div>
          </div>
        )}

        {uploading && (
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Loader className="w-8 h-8 text-orange-600 animate-spin" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Upload en cours...
              </h3>
              <p className="text-gray-600">
                Veuillez patienter pendant le traitement de votre fichier
              </p>
            </motion.div>
          </div>
        )}

        {preview && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative"
          >
            <div className="relative inline-block">
              {mediaType === 'image' && (
                <img
                  src={preview}
                  alt="Aperçu"
                  className="max-w-full max-h-64 rounded-lg shadow-lg"
                />
              )}
              
              {mediaType === 'video' && (
                <div className="relative">
                  <video
                    src={preview}
                    className="max-w-full max-h-64 rounded-lg shadow-lg"
                    controls
                  />
                </div>
              )}
              
              {mediaType === 'audio' && (
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-4">
                    <Music className="w-12 h-12 text-purple-600" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">Fichier Audio</h4>
                      <p className="text-sm text-gray-600">Cliquez pour écouter</p>
                      <audio src={preview} controls className="mt-2 w-full" />
                    </div>
                  </div>
                </div>
              )}
              
              <button
                onClick={removeMedia}
                className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="mt-4 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-sm text-green-600 font-medium">
                {getMediaLabel(mediaType)} uploadé avec succès
              </span>
            </div>
          </motion.div>
        )}

        {error && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-2">
              <AlertCircle className="w-6 h-6 text-red-600 mr-2" />
              <span className="text-red-600 font-medium">Erreur</span>
            </div>
            <p className="text-red-600 text-sm">{error}</p>
            <button
              onClick={openFileDialog}
              className="mt-3 px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
            >
              Réessayer
            </button>
          </motion.div>
        )}
      </div>

      {/* Informations supplémentaires */}
      <div className="mt-4 text-xs text-gray-500">
        <div className="flex items-center justify-between">
          <span>Conseils pour une meilleure qualité :</span>
          <span>Résolution recommandée: 1920x1080</span>
        </div>
      </div>
    </div>
  );
};

export default MediaUpload;
