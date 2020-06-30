import React, { useState } from 'react'
import textInsert from '../../utils/textInsert'
import { Wrapper, Panel, Navigation, List, ListItem, PanelWrapper, Textarea, RenderedPanel } from './styles'
import { ContentWrapper } from '../PostContent/styles'

interface Props {
  onChange(content: string): void
  value?: string
}

enum ViewModes {
  Code = "Code",
  View = "View",
  Split = "Split",
}

const Editor: React.FC<Props> = ({ value = '', onChange }: Props): React.ReactElement => {

  const $editor = React.createRef<HTMLTextAreaElement>()

  const [ content, setContent ] = useState<string>(value)
  const [ viewMode, setViewMode ] = useState<ViewModes>(ViewModes.Split)

  const onLocalChange = (content: string): void => {
    setContent(content)
    onChange(content)
  }

  const insert = (e: React.MouseEvent<HTMLElement>): void => {
    if (!$editor.current) return null
    const type = e.currentTarget ? e.currentTarget.getAttribute('data-type') : e
    textInsert($editor.current, type)
    onLocalChange($editor.current.value)
  }

  return (
    <Wrapper>
      <Navigation>
        <List>
          <ListItem data-type="h1" onClick={insert} title="H1">H1</ListItem>
          <ListItem data-type="h2" onClick={insert} title="H2">H2</ListItem>
          <ListItem data-type="h3" onClick={insert} title="H3">H3</ListItem>
          <ListItem data-type="h4" onClick={insert} title="H4">H4</ListItem>
          <ListItem data-type="image" onClick={insert} title="Image"><i className="foricon for-image" /></ListItem>
          <ListItem data-type="link" onClick={insert} title="Link">
              <i className="foricon for-link" />
          </ListItem>
          <ListItem data-type="p" onClick={insert} title="P">P</ListItem>
          <ListItem data-type="br" onClick={insert} title="Blank Line">Blank</ListItem>

          <ListItem onClick={() => setViewMode(ViewModes.Code)}>Code</ListItem>
          <ListItem onClick={() => setViewMode(ViewModes.View)}>View</ListItem>
          <ListItem onClick={() => setViewMode(ViewModes.Split)}>Split</ListItem>
        </List>
      </Navigation>

      <PanelWrapper>

        <Panel show={viewMode === ViewModes.Split || viewMode === ViewModes.Code}> 
          <Textarea ref={$editor} value={content} onChange={(e: React.FormEvent<HTMLTextAreaElement>) => onLocalChange(e.currentTarget.value)} />
        </Panel>

        <Panel show={viewMode === ViewModes.Split || viewMode === ViewModes.View}>
          <RenderedPanel>
            <ContentWrapper>
              <span dangerouslySetInnerHTML={{ __html: content }} />
            </ContentWrapper>
          </RenderedPanel>
        </Panel>

      </PanelWrapper>
    </Wrapper>
  )
}

export default Editor