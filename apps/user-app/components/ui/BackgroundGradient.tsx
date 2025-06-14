import React from 'react';

type BackgroundGradientProps = {
  children: React.ReactNode;
  className?: string;
};

const BackgroundGradient = ({ children, className = '' }: BackgroundGradientProps) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Background image layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg")'
        }}
      ></div>

      {/* Background gradient with animated blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-blue-50 z-0">
        {/* Animated blob 1 */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        
        {/* Animated blob 2 */}
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        
        {/* Animated blob 3 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Mesh pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaC00djFoNHYtMXptNiAwaC00djFoNHYtMXptLTEyIDBoLTR2MWg0di0xem0tNiAwaC00djFoNHYtMXptMTggMGgtNHYxaDR2LTF6TTQgMjRoLTR2MWg0di0xem02IDBoLTR2MWg0di0xem02IDBoLTR2MWg0di0xem02IDBoLTR2MWg0di0xem02IDBoLTR2MWg0di0xem02IDBoLTR2MWg0di0xeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50 z-0"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BackgroundGradient;