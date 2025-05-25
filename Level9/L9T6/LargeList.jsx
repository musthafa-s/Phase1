import React from 'react'

const LargeList = ({ items }) => {
    console.log('LargeList rendered');
    return (
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    );
  };

  function areEqual(prevProps, nextProps) {
    return JSON.stringify(prevProps.items) === JSON.stringify(nextProps.items);
  }

export default React.memo(LargeList, areEqual)


// Optional: Custom comparison function for deep equality

// export default React.memo(LargeList, areEqual);
