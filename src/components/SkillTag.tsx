import React from 'react';

interface SkillTagProps {
  name: string;
}

const SkillTag: React.FC<SkillTagProps> = ({ name}) => {
  return (
    <div className="group relative">
      <div className="px-3 py-1 bg-gray-100 text-gray-900 rounded-full text-sm hover:bg-gray-200 transition-colors">
        {name}
      </div>
    </div>
  );
};

export default SkillTag;