import React from 'react';

export function FlexAlignment() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-xl font-bold mb-4">Justify Content (Main Axis)</h2>
        <div className="space-y-4">
          <div className="flex justify-start bg-purple-100 p-4 rounded-lg">
            <div className="bg-purple-500 text-white p-4 rounded mx-2">Start</div>
            <div className="bg-purple-500 text-white p-4 rounded mx-2">Start</div>
          </div>
          
          <div className="flex justify-center bg-purple-100 p-4 rounded-lg">
            <div className="bg-purple-500 text-white p-4 rounded mx-2">Center</div>
            <div className="bg-purple-500 text-white p-4 rounded mx-2">Center</div>
          </div>
          
          <div className="flex justify-end bg-purple-100 p-4 rounded-lg">
            <div className="bg-purple-500 text-white p-4 rounded mx-2">End</div>
            <div className="bg-purple-500 text-white p-4 rounded mx-2">End</div>
          </div>
          
          <div className="flex justify-between bg-purple-100 p-4 rounded-lg">
            <div className="bg-purple-500 text-white p-4 rounded">Between</div>
            <div className="bg-purple-500 text-white p-4 rounded">Between</div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Align Items (Cross Axis)</h2>
        <div className="h-48 flex items-start bg-pink-100 p-4 rounded-lg mb-4">
          <div className="bg-pink-500 text-white p-4 rounded mx-2">Start</div>
          <div className="bg-pink-500 text-white p-4 rounded mx-2">Start</div>
        </div>
        
        <div className="h-48 flex items-center bg-pink-100 p-4 rounded-lg mb-4">
          <div className="bg-pink-500 text-white p-4 rounded mx-2">Center</div>
          <div className="bg-pink-500 text-white p-4 rounded mx-2">Center</div>
        </div>
        
        <div className="h-48 flex items-end bg-pink-100 p-4 rounded-lg">
          <div className="bg-pink-500 text-white p-4 rounded mx-2">End</div>
          <div className="bg-pink-500 text-white p-4 rounded mx-2">End</div>
        </div>
      </section>
    </div>
  );
}