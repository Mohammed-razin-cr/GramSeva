import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { useLanguage } from '../context/LanguageContext';
import { ServiceItem } from '../types';

interface CategoryChartProps {
  services: ServiceItem[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  getCategoryName: (categoryKey: string) => string;
}

export default function CategoryChart({
  services,
  selectedCategory,
  onSelectCategory,
  getCategoryName
}: CategoryChartProps) {
  const { t } = useLanguage();

  // Define categories with corresponding colors matching the app theme
  const categoriesList = [
    { key: 'health', color: '#f43f5e' }, // Rose 500
    { key: 'water', color: '#0ea5e9' },  // Sky 500
    { key: 'agriculture', color: '#10b981' }, // Emerald 500
    { key: 'education', color: '#8b5cf6' }, // Violet 500
    { key: 'government', color: '#f59e0b' } // Amber 500
  ] as const;

  // Process data for the chart
  const data = categoriesList.map((cat) => {
    const count = services.filter((s) => s.categoryKey === cat.key).length;
    return {
      key: cat.key,
      name: getCategoryName(cat.key),
      count,
      color: cat.color
    };
  });

  const totalCount = services.length;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
          {t.metadataLabel || "Service Distribution"}
        </h2>
        <span className="text-[10px] font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
          {totalCount} Total
        </span>
      </div>

      <div className="h-44 w-full -ml-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 5, right: 15, left: 10, bottom: 5 }}
          >
            <XAxis
              type="number"
              hide
              domain={[0, 'maxDataValue']}
            />
            <YAxis
              dataKey="name"
              type="category"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#475569', fontSize: 11, fontWeight: 500 }}
              width={75}
            />
            <Tooltip
              cursor={{ fill: 'rgba(241, 194, 50, 0.05)' }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const item = payload[0].payload;
                  return (
                    <div className="bg-slate-900 text-white text-xs px-2.5 py-1.5 rounded-lg shadow-md border border-slate-800">
                      <span className="font-bold">{item.name}</span>
                      <span className="block text-[10px] text-slate-350 mt-0.5">
                        {item.count} {item.count === 1 ? 'service' : 'services'}
                        {totalCount > 0 && ` (${Math.round((item.count / totalCount) * 100)}%)`}
                      </span>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar
              dataKey="count"
              radius={[4, 4, 4, 4]}
              barSize={12}
              onClick={(item: any) => {
                if (item && item.key) {
                  onSelectCategory(item.key === selectedCategory ? 'all' : item.key);
                }
              }}
              className="cursor-pointer"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  opacity={selectedCategory === 'all' || selectedCategory === entry.key ? 1 : 0.4}
                  className="transition-all duration-300"
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Mini interactive legend beneath */}
      <div className="mt-2.5 pt-3 border-t border-slate-100 grid grid-cols-5 gap-1.5 text-center">
        {data.map((cat) => {
          const isSelected = selectedCategory === cat.key;
          const isAllSelected = selectedCategory === 'all';
          return (
            <button
              key={cat.key}
              onClick={() => onSelectCategory(isSelected ? 'all' : cat.key)}
              title={`${cat.name}: ${cat.count}`}
              className="flex flex-col items-center group cursor-pointer focus:outline-hidden"
            >
              <span
                className="w-2.5 h-2.5 rounded-full transition-transform duration-200 group-hover:scale-125"
                style={{
                  backgroundColor: cat.color,
                  opacity: isSelected || isAllSelected ? 1 : 0.3
                }}
              />
              <span 
                className="text-[9px] font-semibold mt-1 truncate w-full text-slate-500"
                style={{
                  color: isSelected ? cat.color : undefined,
                  fontWeight: isSelected ? '700' : '500'
                }}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
