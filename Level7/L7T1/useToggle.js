import React, { useCallback, useState } from 'react'

const useToggle = ( initialValue = false ) => {
    const [value,setValue] = useState(initialValue);
    const toggle = useCallback((e) => setValue(prev => !prev), [])
  return [value,toggle]

  
}

export default useToggle