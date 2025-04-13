import { FC } from 'react';

interface Stat {
  label: string;
  value: string | number;
  change?: number;
  icon: string;
  color: 'blue' | 'green' | 'yellow' | 'red';
}

interface StatsCardsProps {
  stats: Stat[];
}

const StatsCards: FC<StatsCardsProps> = ({ stats }) => {
  const getColorClasses = (color: Stat['color']) => {
    switch (color) {
      case 'blue':
        return 'bg-blue-50 text-blue-600';
      case 'green':
        return 'bg-green-50 text-green-600';
      case 'yellow':
        return 'bg-yellow-50 text-yellow-600';
      case 'red':
        return 'bg-red-50 text-red-600';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center">
            <div className={`p-3 rounded-lg ${getColorClasses(stat.color)}`}>
              <span className="text-2xl">{stat.icon}</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">{stat.label}</p>
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              {stat.change !== undefined && (
                <p
                  className={`text-sm ${
                    stat.change >= 0 ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {stat.change >= 0 ? '↑' : '↓'} {Math.abs(stat.change)}%
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards; 