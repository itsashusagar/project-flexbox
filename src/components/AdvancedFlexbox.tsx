import React from 'react';

export function AdvancedFlexbox() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-xl font-bold mb-4">Responsive Flex Layout</h2>
        <div className="flex flex-col md:flex-row bg-indigo-100 p-4 rounded-lg">
          <div className="flex-1 bg-indigo-500 text-white p-4 rounded m-2">
            Responsive Item 1
          </div>
          <div className="flex-1 bg-indigo-500 text-white p-4 rounded m-2">
            Responsive Item 2
          </div>
          <div className="flex-1 bg-indigo-500 text-white p-4 rounded m-2">
            Responsive Item 3
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Nested Flex Containers</h2>
        <div className="flex flex-col bg-red-100 p-4 rounded-lg">
          <div className="flex justify-between mb-4">
            <div className="bg-red-500 text-white p-4 rounded">Nested 1</div>
            <div className="bg-red-500 text-white p-4 rounded">Nested 2</div>
          </div>
          <div className="flex justify-center">
            <div className="bg-red-500 text-white p-4 rounded">Centered</div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Complex Layout</h2>
        <div className="flex flex-wrap gap-4 bg-teal-100 p-4 rounded-lg">
          <div className="flex-1 min-w-[200px] bg-teal-500 text-white p-4 rounded">
            Flexible Item
          </div>
          <div className="flex-1 min-w-[200px] bg-teal-500 text-white p-4 rounded">
            Flexible Item
          </div>
          <div className="flex-1 min-w-[200px] bg-teal-500 text-white p-4 rounded">
            Flexible Item
          </div>
        </div>
      </section>
    </div>
  );
}