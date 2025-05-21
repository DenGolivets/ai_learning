import React from 'react'
import WorkspaceProvider from './providerWorkspace'

const WorkspaceLayout = ({children}) => {
  return (
    <WorkspaceProvider>
      {children}
    </WorkspaceProvider>
  )
}

export default WorkspaceLayout
