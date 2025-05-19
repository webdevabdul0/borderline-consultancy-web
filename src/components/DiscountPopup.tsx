
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const DiscountPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the popup has been shown before
    const hasShownPopup = localStorage.getItem("discountPopupShown");
    
    if (!hasShownPopup) {
      // Show popup after 2 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Mark the popup as shown
    localStorage.setItem("discountPopupShown", "true");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md bg-gray-800 border-gray-700 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-blue-400">Special Offer!</DialogTitle>
          <DialogDescription className="text-center py-2 text-gray-200">
            <div className="py-4">
              <div className="bg-gray-700 border-l-4 border-yellow-500 p-4 mb-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-200">
                      We are currently offering a <span className="font-bold text-yellow-400">20% discount</span> on all file completion services!
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center mb-4">
                <img 
                  src="/lovable-uploads/9960c49c-dd0f-44e4-b34e-9eebc50f62e6.png" 
                  alt="Border logo" 
                  className="w-24 h-24"
                />
              </div>
              
              <p className="text-base text-gray-300 mb-4">
                Limited time offer for all types of visas. Contact us today to take advantage of this special promotion!
              </p>
              
              <p className="text-sm text-gray-400 italic">
                *Offer valid for new applications only. Terms and conditions apply.
              </p>
            </div>
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-between mt-4">
          <Button variant="outline" onClick={handleClose} className="border-gray-600 text-gray-300 hover:bg-gray-700">
            Close
          </Button>
          <Button onClick={() => {
            window.location.href = "/#book-quote";
            handleClose();
          }} className="bg-blue-600 text-white hover:bg-blue-700">
            Book Now
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DiscountPopup;
