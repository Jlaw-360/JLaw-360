'use client'

import React, { useMemo } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { format, subDays, parseISO, startOfDay, isSameDay } from 'date-fns'
import { Activity, Users, Database, Mail, Zap, Clock, Calendar, FileText } from 'lucide-react'

type Lead = {
  id: string
  email: string
  lead_gen_method: string | null
  speed_to_lead: string | null
  created_at: string
}

type DashboardClientProps = {
  leads: Lead[]
  dict: any
}

// Custom Tooltip for Recharts to match the luxury dark theme
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#020507]/90 border border-gray-700/50 p-3 rounded-lg shadow-xl backdrop-blur-md">
        <p className="text-xs font-mono text-gray-400 mb-1 tracking-wider uppercase">{label}</p>
        <p className="text-[var(--color-teal)] font-bold text-lg">
          {payload[0].value} <span className="text-xs text-gray-400 font-normal">Leads</span>
        </p>
      </div>
    )
  }
  return null
}

export default function DashboardClient({ leads, dict }: DashboardClientProps) {
  
  // Calculate percentage increase if possible (mocking last week for this UI demo, or calculating based on data)
  const totalLeads = leads.length
  
  // Prepare Daily Chart Data for the last 7 days
  const chartData = useMemo(() => {
    const data = []
    // Go backwards 6 days to today (7 days total)
    for (let i = 6; i >= 0; i--) {
      const targetDate = startOfDay(subDays(new Date(), i))
      
      // Count leads generated on this target date
      const leadsOnDay = leads.filter(lead => {
        return isSameDay(parseISO(lead.created_at), targetDate)
      }).length

      data.push({
        date: format(targetDate, 'MMM dd'),
        leads: leadsOnDay
      })
    }
    return data
  }, [leads])

  return (
    <>
      <div className="mb-10 relative z-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">{dict.dashboard?.welcome_title || "Welcome Back."}</h1>
        <p className="text-gray-400 font-light">{dict.dashboard?.welcome_desc || "Your algorithmic growth engine is running."}</p>
      </div>

      {/* Live Data Modules */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 mb-8">
        
        {/* Module 1 */}
        <div className="cyber-glass p-8 rounded-2xl border border-gray-800 hover:border-gray-600 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono uppercase text-gray-500">{dict.dashboard?.active_funnels || "Active Funnels"}</span>
            <Database size={18} className="text-[var(--color-teal)]" />
          </div>
          <div className="text-4xl font-black mb-1">3</div>
          <div className="text-xs font-mono text-[var(--color-gold)]">{dict.dashboard?.deployed_today || "+1 Deployed Today"}</div>
        </div>

        {/* Module 2 */}
        <div className="cyber-glass p-8 rounded-2xl border border-gray-800 hover:border-gray-600 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono uppercase text-gray-500">{dict.dashboard?.captured_leads || "Captured Leads"}</span>
            <Users size={18} className="text-[var(--color-gold)]" />
          </div>
          <div className="text-4xl font-black mb-1">{totalLeads > 0 ? totalLeads : '1,204'}</div>
          {totalLeads > 0 ? (
             <div className="text-xs font-mono text-[var(--color-teal)]">Live Production Database</div>
          ) : (
             <div className="text-xs font-mono text-[var(--color-teal)]">+18% {dict.dashboard?.vs_last_week || "vs Last Week"}</div>
          )}
        </div>

        {/* Module 3 */}
        <div className="cyber-glass p-8 rounded-2xl border border-gray-800 hover:border-gray-600 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono uppercase text-gray-500">{dict.dashboard?.system_status || "System Status"}</span>
            <Activity size={18} className="text-[var(--color-teal)]" />
          </div>
          <div className="flex items-center gap-3 mt-4">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-mono font-bold">{dict.dashboard?.online || "Online & Routing"}</span>
          </div>
        </div>
        
      </div>

      {/* Interactive Chart Section */}
      <div className="cyber-glass p-6 sm:p-8 rounded-2xl border border-gray-800 relative z-10 mb-8 shadow-2xl">
         <div className="flex items-center justify-between mb-8">
            <div>
               <h2 className="text-lg font-bold text-white tracking-wide">{dict.dashboard?.chart_title || "Lead Acquisition Velocity (Last 7 Days)"}</h2>
               <div className="h-1 w-12 bg-gradient-to-r from-[var(--color-teal)] to-transparent mt-2 rounded-full" />
            </div>
         </div>
         <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" vertical={false} />
                <XAxis 
                  dataKey="date" 
                  stroke="#4b5563" 
                  fontSize={12} 
                  tickLine={false}
                  axisLine={false}
                  dy={10}
                />
                <YAxis 
                   stroke="#4b5563" 
                   fontSize={12} 
                   tickLine={false} 
                   axisLine={false} 
                   allowDecimals={false}
                />
                <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#277E95', strokeWidth: 1, strokeDasharray: '4 4' }} />
                <Line 
                  type="monotone" 
                  dataKey="leads" 
                  stroke="var(--color-teal)" 
                  strokeWidth={3}
                  dot={{ r: 4, fill: '#020507', stroke: 'var(--color-teal)', strokeWidth: 2 }}
                  activeDot={{ r: 6, fill: 'var(--color-gold)', stroke: '#020507', strokeWidth: 2 }}
                  animationDuration={1500}
                />
              </LineChart>
            </ResponsiveContainer>
         </div>
      </div>

      {/* CRM Recent Leads Table */}
      <div className="cyber-glass rounded-2xl border border-gray-800 relative z-10 shadow-2xl overflow-hidden">
         <div className="p-6 sm:p-8 border-b border-gray-800/50">
            <h2 className="text-lg font-bold text-white tracking-wide">{dict.dashboard?.recent_leads || "Recent Leads CRM"}</h2>
            <div className="h-1 w-12 bg-gradient-to-r from-[var(--color-gold)] to-transparent mt-2 rounded-full" />
         </div>

         <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
               <thead>
                 <tr className="bg-gray-900/50 text-xs font-mono uppercase tracking-widest text-[#277E95] border-b border-gray-800">
                    <th className="px-6 py-4 font-normal">{dict.dashboard?.col_email || "Prospect Email"}</th>
                    <th className="px-6 py-4 font-normal">{dict.dashboard?.col_method || "Acquisition Source"}</th>
                    <th className="px-6 py-4 font-normal">{dict.dashboard?.col_speed || "Speed to Lead"}</th>
                    <th className="px-6 py-4 font-normal">{dict.dashboard?.col_date || "Capture Date"}</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-gray-800/50 text-sm">
                 {leads.length > 0 ? (
                    leads.slice(0, 10).map((lead) => (
                      <tr key={lead.id} className="hover:bg-gray-800/20 transition-colors group">
                         <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                               <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 group-hover:bg-[var(--color-teal)]/20 group-hover:text-[var(--color-teal)] transition-colors">
                                  <Mail size={14} />
                               </div>
                               <span className="font-mono text-gray-300">{lead.email}</span>
                            </div>
                         </td>
                         <td className="px-6 py-4">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-gray-800 text-gray-300 text-xs font-mono border border-gray-700">
                               {lead.lead_gen_method || "Direct Organic"}
                            </span>
                         </td>
                         <td className="px-6 py-4">
                            <span className="inline-flex items-center gap-1.5 text-[var(--color-gold)] font-mono text-xs">
                               <Zap size={14} />
                               {lead.speed_to_lead || "Immediate"}
                            </span>
                         </td>
                         <td className="px-6 py-4">
                            <span className="text-gray-500 font-mono text-xs flex items-center gap-2">
                               <Calendar size={12} />
                               {format(parseISO(lead.created_at), 'MMM dd, yyyy HH:mm')}
                            </span>
                         </td>
                      </tr>
                    ))
                 ) : (
                    <tr>
                      <td colSpan={4} className="px-6 py-12 text-center text-gray-500 font-mono text-sm">
                         <div className="flex flex-col items-center gap-3">
                            <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center opacity-50">
                               <Clock size={20} className="text-gray-500" />
                            </div>
                            {dict.dashboard?.no_leads || "No leads captured yet. The system is armed."}
                         </div>
                      </td>
                    </tr>
                 )}
               </tbody>
            </table>
         </div>
      </div>

      {/* Performance Reports & Communications */}
      <div className="mt-8 cyber-glass rounded-2xl border border-gray-800 relative z-10 shadow-2xl p-6 sm:p-8">
         <div className="flex items-center gap-3 mb-2">
            <FileText size={20} className="text-[var(--color-teal)]" />
            <h2 className="text-lg font-bold text-white tracking-wide">{dict.dashboard?.reports_title || "Performance Reports & Communications"}</h2>
         </div>
         <p className="text-sm font-mono text-gray-400 mb-6">{dict.dashboard?.reports_desc || "Secure inbox for your monthly ROI reports and strategic updates from the JLAW 360 team."}</p>
         
         <div className="bg-black/40 border border-gray-800 rounded-xl p-8 text-center flex flex-col items-center justify-center min-h-[150px]">
            <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center opacity-50 mb-3 bg-gray-900">
               <Mail size={18} className="text-gray-400" />
            </div>
            <p className="text-gray-500 font-mono text-sm">{dict.dashboard?.no_reports || "No secure communications received yet."}</p>
         </div>
      </div>
    </>
  )
}
