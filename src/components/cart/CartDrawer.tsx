import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, Download, CheckCircle2, ShieldCheck, Printer } from 'lucide-react';
import { CartItem, Pattern } from '../../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onRemoveItem: (patternId: string) => void;
  onClearCart: () => void;
  onDownloadPatternPDF: (pattern: Pattern) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onRemoveItem,
  onClearCart,
  onDownloadPatternPDF,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [completedOrder, setCompletedOrder] = useState<{
    orderId: string;
    items: CartItem[];
    total: number;
    email: string;
  } | null>(null);

  if (!isOpen) return null;

  const rawSubtotal = cart.reduce((sum, item) => sum + (item.pattern.price || 0), 0);
  const discountAmount = discountApplied ? rawSubtotal * 0.2 : 0;
  const finalTotal = Math.max(0, rawSubtotal - discountAmount);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'STITCH20' || promoCode.trim().toUpperCase() === 'WELCOME') {
      setDiscountApplied(true);
    }
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerEmail || !customerName) return;
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setCompletedOrder({
        orderId: `MC-${Math.floor(100000 + Math.random() * 900000)}`,
        items: [...cart],
        total: finalTotal,
        email: customerEmail,
      });
      onClearCart();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#49343B]/40 backdrop-blur-xs flex justify-end">
      <div className="w-full max-w-md bg-[#FFF9F7] h-full shadow-2xl flex flex-col justify-between border-l border-[#E8BFC5]/50 animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-6 border-b border-[#E8BFC5]/40 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#A65F73]" />
            <h3 className="font-serif text-xl font-semibold text-[#49343B]">
              Digital Pattern Bag
            </h3>
            <span className="text-xs text-[#8E747E] font-medium">({cart.length})</span>
          </div>
          <button
            onClick={() => {
              setCompletedOrder(null);
              onClose();
            }}
            className="p-2 text-[#49343B] hover:text-[#A65F73] rounded-full hover:bg-[#F8E7E9] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 flex-1 overflow-y-auto space-y-6">
          {completedOrder ? (
            /* Order Success & Digital Delivery State */
            <div className="space-y-6 text-center py-4">
              <div className="w-14 h-14 rounded-full bg-[#F8E7E9] text-[#A65F73] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#A65F73]">
                  Order #{completedOrder.orderId}
                </span>
                <h4 className="font-serif text-2xl font-semibold text-[#49343B] mt-1">
                  Thank You for Your Order!
                </h4>
                <p className="text-xs text-[#6E535C] mt-1">
                  A receipt and backup link have been sent to <strong>{completedOrder.email}</strong>.
                </p>
              </div>

              {/* Instant Download Action List */}
              <div className="bg-white rounded-2xl border border-[#E8BFC5] p-5 text-left space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#49343B] block">
                  Instant PDF Downloads Ready:
                </span>
                {completedOrder.items.map((item) => (
                  <div
                    key={item.pattern.id}
                    className="flex items-center justify-between p-3 rounded-xl bg-[#FFF9F7] border border-[#E8BFC5]/50 gap-3"
                  >
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-[#49343B] truncate">
                        {item.pattern.title}
                      </p>
                      <span className="text-[11px] text-[#8E747E]">
                        {item.pattern.pdfPageCount} pages · Printable PDF
                      </span>
                    </div>

                    <button
                      onClick={() => onDownloadPatternPDF(item.pattern)}
                      className="py-1.5 px-3 bg-[#A65F73] hover:bg-[#87495B] text-white text-xs font-semibold rounded-lg flex items-center gap-1 shrink-0 shadow-2xs"
                    >
                      <Download className="w-3.5 h-3.5" /> Download
                    </button>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setCompletedOrder(null);
                    onClose();
                  }}
                  className="w-full py-3 bg-[#F8E7E9] hover:bg-[#E8BFC5] text-[#49343B] text-xs font-semibold rounded-xl transition-colors"
                >
                  Continue Browsing
                </button>
              </div>
            </div>
          ) : cart.length === 0 ? (
            /* Empty Cart */
            <div className="text-center py-16 space-y-3">
              <ShoppingBag className="w-10 h-10 text-[#C98796] mx-auto opacity-70" />
              <h4 className="font-serif text-lg font-semibold text-[#49343B]">
                Your bag is empty
              </h4>
              <p className="text-xs text-[#6E535C] max-w-xs mx-auto">
                Discover our curated library of premium downloadable PDF crochet patterns.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2.5 bg-[#A65F73] text-white text-xs font-semibold rounded-xl"
              >
                Explore Patterns
              </button>
            </div>
          ) : (
            /* Active Cart Items */
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.pattern.id}
                  className="flex items-center gap-4 bg-white p-3 rounded-2xl border border-[#E8BFC5]/40"
                >
                  <img
                    src={item.pattern.image}
                    alt={item.pattern.title}
                    className="w-16 h-16 rounded-xl object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h5 className="font-serif text-sm font-semibold text-[#49343B] truncate">
                      {item.pattern.title}
                    </h5>
                    <p className="text-xs text-[#8E747E]">
                      PDF Download · {item.pattern.difficulty}
                    </p>
                    <span className="text-xs font-bold text-[#A65F73] mt-0.5 block">
                      ${item.pattern.price?.toFixed(2)} USD
                    </span>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.pattern.id)}
                    className="p-2 text-[#8E747E] hover:text-rose-600 transition-colors"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}

              {/* Promo code form */}
              <form onSubmit={handleApplyPromo} className="pt-2">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Coupon code (e.g. STITCH20)"
                    className="flex-1 px-3 py-2 text-xs bg-white border border-[#E8BFC5] rounded-xl focus:outline-none focus:border-[#A65F73] uppercase"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#F8E7E9] hover:bg-[#E8BFC5] text-[#49343B] text-xs font-semibold rounded-xl"
                  >
                    Apply
                  </button>
                </div>
                {discountApplied && (
                  <p className="text-[11px] text-emerald-700 font-medium mt-1">
                    ✓ 20% Creator Community Discount Applied!
                  </p>
                )}
              </form>

              {/* Customer details for digital delivery */}
              <div className="pt-2 border-t border-[#E8BFC5]/30 space-y-3">
                <span className="text-xs font-semibold text-[#49343B] block">
                  Digital Delivery Information:
                </span>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white border border-[#E8BFC5] rounded-xl focus:outline-none focus:border-[#A65F73]"
                />
                <input
                  type="email"
                  required
                  placeholder="Your Email for PDF Delivery"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white border border-[#E8BFC5] rounded-xl focus:outline-none focus:border-[#A65F73]"
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer with totals & action */}
        {!completedOrder && cart.length > 0 && (
          <div className="p-6 bg-white border-t border-[#E8BFC5]/40 space-y-4">
            <div className="space-y-1.5 text-xs text-[#6E535C]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${rawSubtotal.toFixed(2)} USD</span>
              </div>
              {discountApplied && (
                <div className="flex justify-between text-emerald-700 font-medium">
                  <span>Discount (20%)</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between font-serif text-base font-bold text-[#49343B] pt-2 border-t border-[#E8BFC5]/20">
                <span>Total</span>
                <span>${finalTotal.toFixed(2)} USD</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              disabled={isProcessing || !customerEmail || !customerName}
              className="w-full py-3.5 bg-[#A65F73] hover:bg-[#87495B] disabled:opacity-50 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
            >
              {isProcessing ? (
                <span>Generating Digital Delivery...</span>
              ) : (
                <>
                  <span>Complete Instant Order</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#8E747E]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#A65F73]" />
              <span>Instant download link + permanent email copy</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
