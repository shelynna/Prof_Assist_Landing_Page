import React from 'react';

export const DashboardPreview: React.FC = () => (
  <div className="relative rounded-2xl bg-white/70 backdrop-blur-md border border-gray-200/70 p-6 shadow-xl max-w-4xl mx-auto">
    <div className="grid sm:grid-cols-3 gap-4 mb-6">
      {['Matches', 'Responses', 'Engagement'].map((label, i) => (
        <div key={label} className="rounded-lg p-4 bg-gradient-to-br from-cyan-50 to-white border border-cyan-100/60 relative overflow-hidden">
          <span className="text-xs font-medium uppercase tracking-wide text-gray-600">{label}</span>
          <h3 className="mt-2 text-2xl font-bold text-gray-900">{i === 0 ? '12' : i === 1 ? '8' : '73%'}</h3>
          <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className={`h-full rounded-full bg-cyan-500 transition-all ${i === 0 ? 'w-[80%]' : i === 1 ? 'w-[65%]' : 'w-[73%]'}`} />
          </div>
        </div>
      ))}
    </div>
    <div className="grid md:grid-cols-2 gap-5">
      <div className="rounded-xl p-4 bg-gray-50 border border-gray-200">
        <h4 className="text-sm font-semibold text-gray-700 mb-3">Upcoming Actions</h4>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-cyan-500" />Follow-up email to Dr. Chen (Day 5)</li>
          <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-rose-500" />Draft research alignment summary (Dr. Patel)</li>
          <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-teal-500" />Schedule portfolio review</li>
        </ul>
      </div>
      <div className="rounded-xl p-4 bg-gray-50 border border-gray-200">
        <h4 className="text-sm font-semibold text-gray-700 mb-3">Engagement Trend</h4>
        <div className="h-32 relative">
          <svg viewBox="0 0 200 100" className="absolute inset-0 w-full h-full">
            <path d="M0 80 L20 70 L40 72 L60 55 L80 50 L100 40 L120 45 L140 35 L160 30 L180 25 L200 20" className="stroke-cyan-500" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M0 85 L200 85" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="4 4" />
          </svg>
        </div>
        <p className="mt-2 text-xs text-gray-500">Response likelihood trending upward (+14% past 10 days)</p>
      </div>
    </div>
  </div>
);
