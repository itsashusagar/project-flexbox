import React from 'react';

export function FlexGrowShrink() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-xl font-bold mb-4">Flex Grow</h2>
        <div className="flex bg-yellow-100 p-4 rounded-lg">
          <div className="flex-none bg-yellow-500 text-white p-4 rounded">
            Static
          </div>
          <div className="flex-grow bg-yellow-500 text-white p-4 rounded mx-2">
            Grows
          </div>
          <div className="flex-none bg-yellow-500 text-white p-4 rounded">
            Static
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Flex Shrink</h2>
        <div className="flex bg-orange-100 p-4 rounded-lg">
          <div className="flex-shrink-0 w-32 bg-orange-500 text-white p-4 rounded">
            Won't Shrink
          </div>
          <div className="flex-shrink w-full bg-orange-500 text-white p-4 rounded mx-2">
            Shrinks
          </div>
          <div className="flex-shrink-0 w-32 bg-orange-500 text-white p-4 rounded">
            Won't Shrink
          </div>
        </div>
      </section>
    </div>
  );
}