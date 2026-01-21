
import React, { useState, useEffect, useMemo } from 'react';
import { BIBLE_PLAN } from './data';
import { ProgressState } from './types';
import { CheckCircle2, Circle, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';

export default function App() {
  const [progress, setProgress] = useState<ProgressState>(() => {
    const saved = localStorage.getItem('bible-reading-progress');
    return saved ? JSON.parse(saved) : {};
  });

  const [openMonths, setOpenMonths] = useState<Record<string, boolean>>({
    'Janeiro': true // Inicia com o primeiro mês aberto
  });

  useEffect(() => {
    localStorage.setItem('bible-reading-progress', JSON.stringify(progress));
  }, [progress]);

  const toggleDay = (id: string) => {
    setProgress(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleMonth = (monthName: string) => {
    setOpenMonths(prev => ({
      ...prev,
      [monthName]: !prev[monthName]
    }));
  };

  const stats = useMemo(() => {
    const totalDays = 365;
    const completedDays = Object.values(progress).filter(Boolean).length;
    const percentage = Math.round((completedDays / totalDays) * 100);
    return { totalDays, completedDays, percentage };
  }, [progress]);

  return (
    <div className="min-h-screen bg-stone-50 text-slate-800 pb-10">
      {/* Header Fixo */}
      <header className="sticky top-0 z-30 bg-white shadow-md border-b border-purple-100">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-xl font-bold text-purple-800">Leitura Bíblica Anual</h1>
            <span className="text-sm font-medium bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
              {stats.completedDays}/365 dias
            </span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
            <div 
              className="bg-purple-600 h-full transition-all duration-500 ease-out" 
              style={{ width: `${stats.percentage}%` }}
            ></div>
          </div>
          <p className="text-right text-[10px] text-slate-500 mt-1 font-medium">
            {stats.percentage}% CONCLUÍDO
          </p>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="max-w-md mx-auto px-4 mt-6 space-y-4">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-purple-50 mb-6 text-center">
          <p className="text-sm italic text-slate-600">
            "Toda palavra de DEUS, é pura; Escudo é para os que confiam nEle" <br/>
            <span className="font-bold">Pv 30: 5</span>
          </p>
        </div>

        {BIBLE_PLAN.map((month) => (
          <section key={month.name} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <button 
              onClick={() => toggleMonth(month.name)}
              className="w-full flex items-center justify-between p-4 bg-purple-50/50 hover:bg-purple-50 transition-colors"
            >
              <h2 className="text-lg font-bold text-purple-900 uppercase tracking-wider">
                {month.name}
              </h2>
              {openMonths[month.name] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            
            {openMonths[month.name] && (
              <div className="divide-y divide-slate-100">
                {month.days.map((day) => {
                  const isCompleted = progress[day.id];
                  return (
                    <div 
                      key={day.id}
                      onClick={() => toggleDay(day.id)}
                      className={`flex items-center p-4 cursor-pointer transition-colors ${
                        isCompleted ? 'bg-green-50/30' : 'hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex-shrink-0 mr-4">
                        {isCompleted ? (
                          <CheckCircle2 className="text-green-500" size={24} />
                        ) : (
                          <Circle className="text-slate-300" size={24} />
                        )}
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-baseline gap-2">
                          <span className="text-xs font-bold text-purple-400">DIA {day.day}</span>
                        </div>
                        <p className={`text-sm sm:text-base font-medium ${isCompleted ? 'text-slate-400 line-through' : 'text-slate-700'}`}>
                          {day.reference}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        ))}

        <footer className="text-center pt-8 pb-4">
          <p className="text-xs text-slate-400 font-medium tracking-widest uppercase">
            GLÓRIA A DEUS, VENCEMOS!
          </p>
        </footer>
      </main>
    </div>
  );
}
