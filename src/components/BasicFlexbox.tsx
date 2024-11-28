import React from 'react';

export function BasicFlexbox() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-xl font-bold mb-4">Basic Flexbox Container</h2>
        <div className="flex gap-2 bg-blue-100 p-4 rounded-lg">
          <div className="bg-blue-500 text-white p-4 rounded">Item 1</div>
          <div className="bg-blue-500 text-white p-4 rounded">Item 2</div>
          <div className="bg-blue-500 text-white p-4 rounded">Item 3</div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Direction: Column</h2>
        <div className="flex flex-col bg-green-100 p-4 rounded-lg">
          <div className="bg-green-500 text-white p-4 rounded mb-2">Item 1</div>
          <div className="bg-green-500 text-white p-4 rounded mb-2">Item 2</div>
          <div className="bg-green-500 text-white p-4 rounded">Item 3</div>
        </div>
      </section>
    </div>
  );
}