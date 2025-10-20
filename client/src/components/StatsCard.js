import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

const StatsCard = ({ title, value, change, icon: Icon, color = 'blue', format = 'number' }) => {
  const formatValue = (val) => {
    if (format === 'percentage') {
      return `${val}%`;
    } else if (format === 'currency') {
      return new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR'
      }).format(val);
    } else if (format === 'number') {
      return val.toLocaleString('fr-FR');
    }
    return val;
  };

  const getChangeIcon = (change) => {
    if (change > 0) {
      return <TrendingUp className="w-4 h-4 text-green-600" />;
    } else if (change < 0) {
      return <TrendingDown className="w-4 h-4 text-red-600" />;
    }
    return <Minus className="w-4 h-4 text-gray-400" />;
  };

  const getChangeColor = (change) => {
    if (change > 0) return 'text-green-600';
    if (change < 0) return 'text-red-600';
    return 'text-gray-500';
  };

  const getChangeText = (change) => {
    if (change > 0) return `+${change}%`;
    if (change < 0) return `${change}%`;
    return '0%';
  };

  return (
    <div className="card p-6">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{formatValue(value)}</p>
          
          {change !== undefined && (
            <div className="flex items-center mt-2">
              {getChangeIcon(change)}
              <span className={`text-sm font-medium ml-1 ${getChangeColor(change)}`}>
                {getChangeText(change)}
              </span>
              <span className="text-sm text-gray-500 ml-1">vs mois dernier</span>
            </div>
          )}
        </div>
        
        {Icon && (
          <div className={`p-3 rounded-full bg-${color}-100`}>
            <Icon className={`w-8 h-8 text-${color}-600`} />
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsCard;


