
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Index = () => {
  const [message, setMessage] = useState("Hello World");
  const [isPrinted, setIsPrinted] = useState(false);

  const handlePrint = () => {
    setIsPrinted(true);
    // Using setTimeout to reset the printed state after 3 seconds
    setTimeout(() => {
      setIsPrinted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-indigo-100">
      <div className="text-center max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Print Message App</h1>
        
        <div className="mb-8">
          <div 
            className={`p-6 border-2 rounded-md mb-4 min-h-20 flex items-center justify-center transition-all duration-300 ${
              isPrinted 
                ? "border-green-500 bg-green-50 text-green-700" 
                : "border-gray-200 text-gray-400"
            }`}
          >
            {isPrinted ? (
              <p className="text-2xl font-semibold">{message}</p>
            ) : (
              <p className="text-sm">Click the button below to print the message</p>
            )}
          </div>
          
          <Button 
            onClick={handlePrint}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
          >
            Print
          </Button>
        </div>
        
        <p className="text-gray-600 text-sm">
          A simple demonstration of React state and UI interaction
        </p>
      </div>
    </div>
  );
};

export default Index;
