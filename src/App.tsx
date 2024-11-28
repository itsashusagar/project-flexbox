import React from 'react';
import { BasicFlexbox } from './components/BasicFlexbox';
import { FlexAlignment } from './components/FlexAlignment';
import { FlexGrowShrink } from './components/FlexGrowShrink';
import { AdvancedFlexbox } from './components/AdvancedFlexbox';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Tailwind CSS Flexbox Guide
        </h1>

        <section>
          <h2 className="text-2xl font-bold mb-6">1. Basic Flexbox</h2>
          <BasicFlexbox />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">2. Flex Alignment</h2>
          <FlexAlignment />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">3. Flex Grow & Shrink</h2>
          <FlexGrowShrink />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">4. Advanced Flexbox</h2>
          <AdvancedFlexbox />
        </section>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Quick Reference:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><code className="bg-blue-100 px-2 py-1 rounded">flex</code> - Create a flex container</li>
            <li><code className="bg-blue-100 px-2 py-1 rounded">flex-row/flex-col</code> - Direction</li>
            <li><code className="bg-blue-100 px-2 py-1 rounded">justify-start/center/end/between</code> - Main axis alignment</li>
            <li><code className="bg-blue-100 px-2 py-1 rounded">items-start/center/end</code> - Cross axis alignment</li>
            <li><code className="bg-blue-100 px-2 py-1 rounded">flex-wrap</code> - Allow items to wrap</li>
            <li><code className="bg-blue-100 px-2 py-1 rounded">flex-grow/flex-shrink</code> - Control item sizing</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;