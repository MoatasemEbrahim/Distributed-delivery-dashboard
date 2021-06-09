import React,{FC,ReactNode} from 'react';

const Layout:FC<{children:ReactNode}> = ({children}) => {
  return (
    <div>
      <div>
        header
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default Layout
