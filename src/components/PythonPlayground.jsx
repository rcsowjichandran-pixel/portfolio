import React, { useEffect, useRef, useState } from 'react';
import { Terminal, Play, RotateCcw, Copy, Check, Sparkles, Database, Server, Cpu } from 'lucide-react';
import { pythonSnippets } from '../data/portfolioData';
import Reveal from './Reveal';

export default function PythonPlayground() {
  const [selectedSnippet, setSelectedSnippet] = useState(pythonSnippets[0]);
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState(pythonSnippets[0].output);
  const [copied, setCopied] = useState(false);
  const [activeExecutionStep, setActiveExecutionStep] = useState(-1);
  const [isPulsing, setIsPulsing] = useState(false);
  const executionTimerRef = useRef(null);

  const handleSelectSnippet = (snippet) => {
    window.clearInterval(executionTimerRef.current);
    setIsRunning(false);
    setActiveExecutionStep(-1);
    setSelectedSnippet(snippet);
    setOutput(snippet.output);
  };

  const handleRunCode = () => {
    window.clearInterval(executionTimerRef.current);
    setIsRunning(true);
    setIsPulsing(true);
    window.setTimeout(() => setIsPulsing(false), 380);
    setActiveExecutionStep(0);
    const steps = [
      '>>> [1/3] Parsing inputs and establishing runtime...',
      '>>> [2/3] Executing vector transformation...',
      '>>> [3/3] Output generated in 42ms:'
    ];
    let stepIndex = 0;
    let characterIndex = 0;
    let streamedOutput = '';
    setOutput('');

    executionTimerRef.current = window.setInterval(() => {
      const currentStep = steps[stepIndex];
      streamedOutput += currentStep[characterIndex];
      characterIndex += 1;
      setOutput(streamedOutput);

      if (characterIndex >= currentStep.length) {
        streamedOutput += '\n';
        stepIndex += 1;
        characterIndex = 0;
        setActiveExecutionStep(stepIndex);
        if (stepIndex >= steps.length) {
          window.clearInterval(executionTimerRef.current);
          window.setTimeout(() => {
            setOutput(`${streamedOutput}\n${selectedSnippet.output}`);
            setActiveExecutionStep(-1);
            setIsRunning(false);
          }, 220);
        }
      }
    }, 13);
  };

  useEffect(() => () => window.clearInterval(executionTimerRef.current), []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(selectedSnippet.code);
    } catch (error) {
      console.error('Unable to copy the Python snippet to the clipboard.', error);
      return;
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    setIsPulsing(true);
    window.setTimeout(() => setIsPulsing(false), 380);
  };

  const renderHighlightedLine = (line, lineIndex) => {
    const pieces = line.split(/(\b(?:def|import|from|return|async|await|class|if|else|for|in|with|as|try|except|True|False|None)\b)/g);
    return (
      <span
        key={`${selectedSnippet.id}-${lineIndex}`}
        className={`python-code-line block ${activeExecutionStep >= 0 && lineIndex === activeExecutionStep ? 'python-code-line-active' : ''}`}
      >
        {pieces.map((piece, pieceIndex) => {
          if (/^(def|import|from|return|async|await|class|if|else|for|in|with|as|try|except)$/.test(piece)) {
            const color = ['def', 'class', 'async', 'await'].includes(piece) ? 'text-[#e9b44c]' : 'text-[#45bfa1]';
            return <span key={pieceIndex} className={`${color} python-keyword`}>{piece}</span>;
          }
          if (/^(True|False|None)$/.test(piece)) {
            return <span key={pieceIndex} className="text-[#d2604a] python-keyword">{piece}</span>;
          }
          return <React.Fragment key={pieceIndex}>{piece}</React.Fragment>;
        })}
        {'\n'}
      </span>
    );
  };

  return (
    <section id="python-lab" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <Reveal className="mb-10">
          <div className="flex items-center gap-2 font-mono text-xs text-[#45bfa1] tracking-widest uppercase mb-2">
            <span>/ 02 python & ai runtime lab</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="font-['Bricolage_Grotesque',sans-serif] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#edefe6] tracking-tight">
                Interactive Python Playground
              </h2>
              <p className="text-sm sm:text-base text-[#8ca79f] mt-2 max-w-2xl">
                Demonstrating backend data manipulation, FastAPI service routes, and LLM prompt parsing directly in an interactive browser terminal.
              </p>
            </div>
            
            <div className="inline-flex items-center gap-2 font-mono text-xs px-3 py-1.5 rounded-full bg-[#10201e] border border-[#1f3a36] text-[#45bfa1]">
              <Cpu className="w-3.5 h-3.5" />
              <span>Python 3.14 Environment Ready</span>
            </div>
          </div>
        </Reveal>

        {/* Snippet Selection Tabs */}
        <Reveal delay={70} className="flex flex-wrap gap-2.5 mb-6">
          {pythonSnippets.map((s) => (
            <button
              key={s.id}
              onClick={() => handleSelectSnippet(s)}
              className={`px-4 py-2 rounded-xl font-mono text-xs transition-all flex items-center gap-2 cursor-pointer ${
                selectedSnippet.id === s.id
                  ? 'bg-[#10201e] text-[#edefe6] border-2 border-[#45bfa1] shadow-lg'
                  : 'bg-[#0a1413] text-[#8ca79f] hover:text-[#edefe6] border border-[#1f3a36]'
              }`}
            >
              {s.id.includes('pandas') && <Database className="w-3.5 h-3.5 text-[#e9b44c]" />}
              {s.id.includes('fastapi') && <Server className="w-3.5 h-3.5 text-[#45bfa1]" />}
              {s.id.includes('ai') && <Sparkles className="w-3.5 h-3.5 text-[#d2604a]" />}
              <span>{s.name}</span>
            </button>
          ))}
        </Reveal>

        {/* Interactive Terminal Window */}
        <Reveal delay={120} className="python-terminal rounded-2xl bg-[#081110] border border-[#1f3a36] shadow-2xl overflow-hidden">
          {/* Terminal Title Bar */}
          <div className="px-4 py-3 bg-[#0a1413] border-b border-[#1f3a36] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#d2604a]"></span>
              <span className="w-3 h-3 rounded-full bg-[#e9b44c]"></span>
              <span className="w-3 h-3 rounded-full bg-[#45bfa1]"></span>
              <span className="font-mono text-xs text-[#8ca79f] ml-2">
                sowjanya@python-box:~/pipelines/{selectedSnippet.id}.py
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="p-1.5 rounded bg-[#10201e] hover:bg-[#1f3a36] text-[#8ca79f] hover:text-[#edefe6] text-xs font-mono transition-colors flex items-center gap-1 cursor-pointer"
                title="Copy code"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
              </button>

              <button
                onClick={handleRunCode}
                disabled={isRunning}
                className="px-3.5 py-1.5 rounded-lg bg-[#45bfa1] hover:bg-[#63d3b6] text-[#0a1413] font-mono text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{isRunning ? 'Executing...' : 'Run Snippet'}</span>
              </button>
            </div>
          </div>

          {/* Code & Output Split Layout */}
          <div className={`python-terminal-body grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#1f3a36] ${isPulsing ? 'python-terminal-pulsing' : ''}`}>
            {/* Code Editor Pane */}
            <div className="lg:col-span-7 p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-[#edefe6] overflow-x-auto bg-[#0b1615]">
              <pre className="text-[#d6ded5]">
                <code>{selectedSnippet.code.split('\n').map(renderHighlightedLine)}</code>
              </pre>
            </div>

            {/* Terminal Output Console */}
            <div className="lg:col-span-5 p-4 sm:p-5 bg-[#070f0e] flex flex-col justify-between font-mono text-xs">
              <div>
                <div className="flex items-center justify-between text-[#45bfa1] text-[11px] mb-3 pb-2 border-b border-[#1f3a36]/50">
                  <span className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5" /> STDOUT / EXECUTION CONSOLE
                  </span>
                  <span className="text-emerald-400">Exit Code: 0 (OK)</span>
                </div>
                <pre className="python-output text-emerald-300/90 whitespace-pre-wrap leading-relaxed overflow-x-auto text-[11px] sm:text-xs">
                  {output}
                  {isRunning && <span className="python-terminal-cursor" aria-hidden="true">▋</span>}
                </pre>
              </div>

              <div className="mt-6 pt-3 border-t border-[#1f3a36]/40 flex items-center justify-between text-[10px] text-[#8ca79f]">
                <span>Runtime: CPython 3.14.7</span>
                <button
                  onClick={() => {
                    window.clearInterval(executionTimerRef.current);
                    setIsRunning(false);
                    setActiveExecutionStep(-1);
                    setOutput(selectedSnippet.output);
                  }}
                  className="hover:text-[#e9b44c] flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" /> Reset Output
                </button>
              </div>
            </div>
          </div>
        </Reveal>

      </div>

      {/* Loom Weft Divider */}
      <div className="max-w-6xl mx-auto px-4 mt-20">
        <div className="weft-divider"></div>
      </div>
    </section>
  );
}
