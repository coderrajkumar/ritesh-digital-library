import { useState } from 'react';
import { INITIAL_SEATS } from './data/libraryData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FacilitiesShowcase } from './components/FacilitiesShowcase';
import { StudyStreamsAndBooks } from './components/StudyStreamsAndBooks';
import { InteractiveSeatPlanner } from './components/InteractiveSeatPlanner';
import { TestimonialsAndGallery } from './components/TestimonialsAndGallery';
import { RulesAndRegulations } from './components/RulesAndRegulations';
import { LocationAndContact } from './components/LocationAndContact';
import { AdmissionModal } from './components/AdmissionModal';
import { Footer } from './components/Footer';

export function App() {
  const [seats, setSeats] = useState(INITIAL_SEATS);
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [bookingModal, setBookingModal] = useState({ open: false, preset: null, instanceKey: 0 });

  const availableSeatsCount = seats.filter((s) => s.status === 'available').length;

  const openBooking = (preset = null) => {
    setBookingModal((prev) => ({
      open: true,
      preset,
      instanceKey: prev.instanceKey + 1,
    }));
  };

  const closeBooking = () => {
    setBookingModal((prev) => ({ ...prev, open: false, preset: null }));
  };

  const handleConfirmSeat = (seatId) => {
    setSeats((prev) =>
      prev.map((seat) =>
        seat.id === seatId && seat.status === 'available'
          ? { ...seat, status: 'reserved' }
          : seat
      )
    );
    if (selectedSeat?.id === seatId) {
      setSelectedSeat(null);
    }
  };

  return (
    <div className="min-h-screen bg-[#060f1d] text-slate-100 overflow-x-hidden">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-xl focus:bg-[#f5b915] focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-[#07111e] focus:shadow-lg"
      >
        Skip to main content
      </a>

      <Navbar onOpenBooking={openBooking} />

      <main id="main-content">
        <HeroSection
          availableSeatsCount={availableSeatsCount}
          onOpenBooking={openBooking}
        />

        <FacilitiesShowcase onOpenBooking={openBooking} />

        <StudyStreamsAndBooks />

        <InteractiveSeatPlanner
          seats={seats}
          selectedSeat={selectedSeat}
          onSelectSeat={setSelectedSeat}
          onOpenBooking={openBooking}
        />

        <TestimonialsAndGallery />

        <RulesAndRegulations />

        <LocationAndContact onOpenBooking={openBooking} />
      </main>

      <Footer onOpenBooking={openBooking} />

      {bookingModal.open && (
        <AdmissionModal
          key={bookingModal.instanceKey}
          initialPreset={bookingModal.preset}
          onClose={closeBooking}
          onConfirmSeat={handleConfirmSeat}
        />
      )}
    </div>
  );
}

export default App;
