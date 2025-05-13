
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
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-blue-700">Special Offer!</DialogTitle>
          <DialogDescription className="text-center py-2">
            <div className="py-4">
              <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      We are currently offering a <span className="font-bold">20% discount</span> on all file completion services!
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center mb-4">
                <img 
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHdpZHRoPSI5NiIgaGVpZ2h0PSI5NiI+PHBhdGggZD0iTTUxMiA2NEMyNjQuNiA2NCA2NCAyNjQuNiA2NCA1MTJzMjAwLjYgNDQ4IDQ0OCA0NDggNDQ4LTIwMC42IDQ0OC00NDhTNzU5LjQgNjQgNTEyIDY0eiIgZmlsbD0iI0RGMDE0QyIvPjxwYXRoIGQ9Ik0yODIuNiA0MjguNmwyMDkuNi03MC4xIDk2LjggMzA2LjYgMTM3LjktMzcuNUw2MzUgMzU4LjNsMTA2LjYgMzMuN1MyNjQuNiA2NCA2NCA1MTIiIGZpbGw9IiNGRkRFMDAiLz48L3N2Zz4=" 
                  alt="Chinese flag" 
                  className="w-24 h-24"
                />
              </div>
              
              <p className="text-base text-gray-700 mb-4">
                Limited time offer for all types of Chinese visas. Contact us today to take advantage of this special promotion!
              </p>
              
              <p className="text-sm text-gray-500 italic">
                *Offer valid for new applications only. Terms and conditions apply.
              </p>
            </div>
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-between mt-4">
          <Button variant="outline" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={() => {
            window.location.href = "/#book-quote";
            handleClose();
          }}>
            Book Now
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DiscountPopup;
