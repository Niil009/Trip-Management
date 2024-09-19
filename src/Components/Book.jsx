import React, { useState } from 'react';
import BasicTripForm from './Forms/BasicTripForm';
import PackageDetailsForm from './Forms/PackageDetailsForm';
import TripDetails from './TripDetails';
// Pause here
const steps = [
    'Trip Details',
    'Package & Accommodation',
    'Payment'
];

const Book = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [completedSteps, setCompletedSteps] = useState([false, false, false]);

    const handleNext = () => {
        if (completedSteps[activeStep]) {
            setActiveStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
        }
    };

    const handleBack = () => {
        setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompletedSteps([false, false, false]);
    };

    const handleCompleteStep = (stepIndex) => {
        setCompletedSteps((prevCompletedSteps) => {
            const newCompletedSteps = [...prevCompletedSteps];
            newCompletedSteps[stepIndex] = true;
            return newCompletedSteps;
        });
    };

    return (
        <div className="relative w-full min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(/path/to/your/background/image.jpg)` }}>
            <div className="absolute inset-0 flex flex-col justify-center items-center p-4 bg-black bg-opacity-50">
                <div className="w-full max-w-lg">
                    <div className="mb-6">
                        {activeStep === 0 && (
                            <BasicTripForm onComplete={() => handleCompleteStep(0)} />
                        )}
                        {activeStep === 1 && (
                            <PackageDetailsForm onComplete={() => handleCompleteStep(1)} />
                        )}
                        {activeStep === 2 && (
                            <div className="text-center">
                                <TripDetails />
                            </div>
                        )}
                    </div>
                    <div className="flex items-center justify-center mb-3">
                        {steps.map((label, index) => (
                            <div key={index} className="relative flex-1 text-center">
                                <div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold
                    ${index <= activeStep ? 'bg-blue-600' : 'bg-gray-400'}`}
                                >
                                    {index + 1}
                                </div>
                                <div
                                    className={`absolute w-full top-1/2 transform -translate-y-1/2
                    ${index < steps.length - 1 ? 'border-t-2' : ''} 
                    ${index <= activeStep ? 'border-blue-600' : 'border-gray-400'}`}
                                ></div>
                                <div className={`mt-2 text-sm ${index <= activeStep ? 'text-blue-600' : 'text-gray-500'}`}>
                                    {label}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center">
                        {activeStep === steps.length - 1 ? (
                            <div>
                                <h2 className="text-lg font-semibold mb-4">All steps completed - your booking is confirmed!</h2>
                                <button
                                    onClick={handleReset}
                                    className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
                                >
                                    Reset
                                </button>
                            </div>
                        ) : (
                            <div>
                                <h2 className="text-lg font-semibold mb-4">{steps[activeStep]}</h2>
                                <div className="flex justify-center mt-4">
                                    <button
                                        className={`bg-gray-400 text-white px-4 py-2 rounded shadow mr-4 ${activeStep === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        onClick={handleBack}
                                        disabled={activeStep === 0}
                                    >
                                        Back
                                    </button>
                                    <button
                                        className={`bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 ${!completedSteps[activeStep] && activeStep !== steps.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        onClick={handleNext}
                                        disabled={!completedSteps[activeStep] && activeStep !== steps.length - 1}
                                    >
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;

