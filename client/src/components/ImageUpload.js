import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Upload, 
  X, 
  Image as ImageIcon, 
  FileImage, 
  AlertCircle,
  CheckCircle,
  Loader
} from 'lucide-react';
import toast from 'react-hot-toast';

const ImageUpload = ({ 
  onImageSelect, 
  maxSize = 5, // MB
  acceptedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
  multiple = false,
  className = ''
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState(null);
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

    // Validation du type
    if (!acceptedTypes.includes(file.type)) {
      setError('Type de fichier non supporté. Formats acceptés: JPEG, PNG, GIF, WebP');
      toast.error('Type de fichier non supporté');
      return;
    }

    setUploading(true);

    try {
      // Créer un aperçu de l'image
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target.result);
        setUploading(false);
        toast.success('Image uploadée avec succès !');
        
        // Appeler la fonction de callback
        if (onImageSelect) {
          onImageSelect(file, e.target.result);
        }
      };
      reader.readAsDataURL(file);
    } catch (err) {
      setError('Erreur lors du traitement de l\'image');
      setUploading(false);
      toast.error('Erreur lors de l\'upload');
    }
  };

  const removeImage = () => {
    setPreview(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    if (onImageSelect) {
      onImageSelect(null, null);
    }
    toast.success('Image supprimée');
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Zone d'upload */}
      <div
        className={`relative border-2 border-dashed rounded-lg p-6 transition-all duration-200 ${
          dragActive 
            ? 'border-blue-500 bg-blue-50' 
            : error 
              ? 'border-red-300 bg-red-50' 
              : 'border-gray-300 bg-gray-50 hover:border-gray-400'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={acceptedTypes.join(',')}
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
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Upload className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Glissez-déposez votre image ici
              </h3>
              <p className="text-gray-600 mb-4">
                ou{' '}
                <button
                  onClick={openFileDialog}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  parcourez vos fichiers
                </button>
              </p>
              <div className="text-sm text-gray-500">
                <p>Formats supportés: JPEG, PNG, GIF, WebP</p>
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
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Loader className="w-8 h-8 text-blue-600 animate-spin" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Upload en cours...
              </h3>
              <p className="text-gray-600">
                Veuillez patienter pendant le traitement de votre image
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
              <img
                src={preview}
                alt="Aperçu"
                className="max-w-full max-h-64 rounded-lg shadow-lg"
              />
              <button
                onClick={removeImage}
                className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="mt-4 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-sm text-green-600 font-medium">
                Image uploadée avec succès
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

export default ImageUpload;

