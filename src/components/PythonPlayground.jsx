import React, { useState } from 'react';
import { Terminal, Play, RotateCcw, Copy, Check, Sparkles, Database, Server, Cpu } from 'lucide-react';
import { pythonSnippets } from '../data/portfolioData';

export default function PythonPlayground() {
  const [selectedSnippet, setSelectedSnippet] = useState(pythonSnippets[0]);
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState(pythonSnippets[0].output);
  const [copied, setCopied] = useState(false);

  const handleSelectSnippet = (snippet) => {
    setSelectedSnippet(snippet);
    setOutput(snippet.output);
  };

  const handleRunCode = () => {
    setIsRunning(true);
    setOutput('>>> Compiling bytecode and invoking Python runtime...\n>>> Initializing memory workspace...');
    setTimeout(() => {
      setOutput(selectedSnippet.output);
      setIsRunning(false);
    }, 650);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="python-lab" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 font-mono text-xs text-[#4e9c8a] tracking-widest uppercase mb-2">
            <span>/ 02 python & ai runtime lab</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="font-['Bricolage_Grotesque',sans-serif] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f1eada] tracking-tight">
                Interactive Python Playground
              </h2>
              <p className="text-sm sm:text-base text-[#96a0c0] mt-2 max-w-2xl">
                Demonstrating backend data manipulation, FastAPI service routes, and LLM prompt parsing directly in an interactive browser terminal.
              </p>
            </div>
            
            <div className="inline-flex items-center gap-2 font-mono text-xs px-3 py-1.5 rounded-full bg-[#182240] border border-[#2c3a64] text-[#4e9c8a]">
              <Cpu className="w-3.5 h-3.5" />
              <span>Python 3.14 Environment Ready</span>
            </div>
          </div>
        </div>

        {/* Snippet Selection Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-6">
          {pythonSnippets.map((s) => (
            <button
              key={s.id}
              onClick={() => handleSelectSnippet(s)}
              className={`px-4 py-2 rounded-xl font-mono text-xs transition-all flex items-center gap-2 cursor-pointer ${
                selectedSnippet.id === s.id
                  ? 'bg-[#182240] text-[#f1eada] border-2 border-[#4e9c8a] shadow-lg'
                  : 'bg-[#131c33] text-[#96a0c0] hover:text-[#f1eada] border border-[#2c3a64]'
              }`}
            >
              {s.id.includes('pandas') && <Database className="w-3.5 h-3.5 text-[#e3a32b]" />}
              {s.id.includes('fastapi') && <Server className="w-3.5 h-3.5 text-[#4e9c8a]" />}
              {s.id.includes('ai') && <Sparkles className="w-3.5 h-3.5 text-[#c8483c]" />}
              <span>{s.name}</span>
            </button>
          ))}
        </div>

        {/* Interactive Terminal Window */}
        <div className="rounded-2xl bg-[#0e1628] border border-[#2c3a64] shadow-2xl overflow-hidden">
          {/* Terminal Title Bar */}
          <div className="px-4 py-3 bg-[#131c33] border-b border-[#2c3a64] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#c8483c]"></span>
              <span className="w-3 h-3 rounded-full bg-[#e3a32b]"></span>
              <span className="w-3 h-3 rounded-full bg-[#4e9c8a]"></span>
              <span className="font-mono text-xs text-[#96a0c0] ml-2">
                sowjanya@python-box:~/pipelines/{selectedSnippet.id}.py
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="p-1.5 rounded bg-[#182240] hover:bg-[#2c3a64] text-[#96a0c0] hover:text-[#f1eada] text-xs font-mono transition-colors flex items-center gap-1 cursor-pointer"
                title="Copy code"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
              </button>

              <button
                onClick={handleRunCode}
                disabled={isRunning}
                className="px-3.5 py-1.5 rounded-lg bg-[#4e9c8a] hover:bg-[#5bb8a3] text-[#131c33] font-mono text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{isRunning ? 'Executing...' : 'Run Snippet'}</span>
              </button>
            </div>
          </div>

          {/* Code & Output Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#2c3a64]">
            {/* Code Editor Pane */}
            <div className="lg:col-span-7 p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-[#f1eada] overflow-x-auto bg-[#0d1424]">
              <pre className="text-[#dcd6c8]">
                <code>{selectedSnippet.code}</code>
              </pre>
            </div>

            {/* Terminal Output Console */}
            <div className="lg:col-span-5 p-4 sm:p-5 bg-[#090e18] flex flex-col justify-between font-mono text-xs">
              <div>
                <div className="flex items-center justify-between text-[#4e9c8a] text-[11px] mb-3 pb-2 border-b border-[#2c3a64]/50">
                  <span className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5" /> STDOUT / EXECUTION CONSOLE
                  </span>
                  <span className="text-emerald-400">Exit Code: 0 (OK)</span>
                </div>
                <pre className="text-emerald-300/90 whitespace-pre-wrap leading-relaxed overflow-x-auto text-[11px] sm:text-xs">
                  {output}
                </pre>
              </div>

              <div className="mt-6 pt-3 border-t border-[#2c3a64]/40 flex items-center justify-between text-[10px] text-[#96a0c0]">
                <span>Runtime: CPython 3.14.7</span>
                <button
                  onClick={() => setOutput(selectedSnippet.output)}
                  className="hover:text-[#e3a32b] flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" /> Reset Output
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Loom Weft Divider */}
      <div className="max-w-6xl mx-auto px-4 mt-20">
        <div className="weft-divider"></div>
      </div>
    </section>
  );
}
