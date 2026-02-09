interface FooterProps {
    variant?: 'default' | 'compact';
}

export const Footer = ({ variant = 'default' }: FooterProps) => {
    const paddingClass = variant === 'compact' ? 'py-6' : 'py-12';

    return (
        <footer className={`bg-gray-50 border-t border-gray-100 ${paddingClass}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm text-gray-500">
                <p>&copy; 2024 Columbus data. All rights reserved.</p>
                <div className="flex space-x-6">
                    <a href="#" className="hover:text-primary">Privacy Policy</a>
                    <a href="#" className="hover:text-primary">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};
