// Fonction utilitaire pour générer les étoiles (pleines, demi, vides)
export const RenderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < Math.floor(rating)) {
            // étoile pleine
            stars.push(
                <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#facc15" className="w-5 h-5">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z" />
                </svg>
            );
        } else if (i < rating) {
            // demi-étoile
            stars.push(
                <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="w-5 h-5">
                    <defs>
                        <linearGradient id={`half-gradient-${i}`}>
                            <stop offset="50%" stopColor="#facc15" />
                            <stop offset="50%" stopColor="#e5e7eb" />
                        </linearGradient>
                    </defs>
                    <path
                        fill={`url(#half-gradient-${i})`}
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z"
                    />
                </svg>
            );
        } else {
            // étoile pâle
            stars.push(
                <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#e5e7eb" className="w-5 h-5">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z" />
                </svg>
            );
        }
    }
    return <div className="flex items-center gap-0.5">{stars}</div>;
};
