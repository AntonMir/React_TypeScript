import React, {createElement} from 'react'

interface Props {

}

const CreateElementComponent: React.FC<Props> = (props) => {
  return (
    createElement('div', {}, [
        createElement('div', { className: 'container', key: 1, onClick: () => console.log('Click') }, [ 
            createElement('p', {className: 'paragraph', key: 1}, 'paragraph-1'),
            createElement('p', {className: 'paragraph', key: 2}, 'paragraph-2')
        ]),
        createElement('input', {className: 'input', key: 2, onChange: () => console.log('Input chsnged')})
    ])
  )
}

export default CreateElementComponent