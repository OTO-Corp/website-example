import { ResponsiveNavbarModal } from "@/modals/ResponsiveNavbarModal";
import { useAppSelector } from "@/store/hooks";

export const ModalProvider = () => {
    const modal = useAppSelector((state) => state.app.modal);

    switch (modal) {
        case RESPONSIVE_NAVBAR_MODAL:
            return <ResponsiveNavbarModal />;
        default:
            return null;
    }
};

export const RESPONSIVE_NAVBAR_MODAL = "responsive-navbar-modal";
