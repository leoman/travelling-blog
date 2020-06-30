import React, { useState } from 'react'
import moment from 'moment'
import { Post } from '../../../../types/post'
import { Photo } from '../../../../types/photo'
import Editor from '../../../../components/Editor'
import { MarkDownEditor, PostImagesContainer, PostPhotosShow, PhotoHeader, PostImage } from './styles'
import {
    Form as FormWrapper,
    FormGroup,
    InputGroup,
    InputGroupAddon,
    Input,
    Select,
    Option,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from '@bootstrap-styled/v4'

interface Props {
    post: Post
    onPostChange(post: Post): void
    onSaveImage?(photo: string): Promise<any>
    onDeleteImage?(id: number): Promise<any>
}

export enum Fields {
  title = "title",
  titleColour = "titleColour",
  photo = "photo",
  content = "content",
  date = "date",
  order = "order",
  status = "status",
  location = "location",
  lat = "lat",
  lng = "lng",
  duration = "duration",
  hideFromBounding = "hideFromBounding",
}


const Form: React.FC<Props> = ({ post, onPostChange, onSaveImage, onDeleteImage }: Props): React.ReactElement => {

  const [formPost, setPost] = useState(post)
  const [currentPhoto, setCurrentPhoto] = useState<string>('')
  const [showPhotos, setShowPhotos] = useState<boolean>(true)
  const [idToDelete, setIdToDelete] = useState<number | null>(null)
  const [modal, setModal] = useState<boolean>(false)

  const onChange = (value, field: string, parent = false) => {

    let newPost: any = {}
    
    if (parent) {
      newPost = {
        ...post,
        location: {
          ...post.location,
          [field]: value
        }
      }
    } else {
      newPost = {
        ...post,
        [field]: value
      }
    }

    const updatedPost: Post = newPost

    setPost(updatedPost)
    onPostChange(updatedPost)
  }

  const onPhotoUpdate = (value: string): void => {
    setCurrentPhoto(value)
  }

  const onAddphoto = async (e: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
    e.preventDefault()
      
    if (onSaveImage) {
      await onSaveImage(currentPhoto)
      setCurrentPhoto('')
    }
  }

  const onPhotoDelete = async (id: number) => {
    if (onDeleteImage) {
      await onDeleteImage(id)
    }
  }

  const renderAddPostImage = (): React.ReactFragment => (
    <>
      <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => onAddphoto(e)}>Add </button>
      <Input onChange={(e: React.FormEvent<HTMLInputElement>) => onPhotoUpdate(e.currentTarget.value)} value={currentPhoto} type="text" className="form-control" />
    </>
  )

  const showDeleteModal = (id: number): void => {
    setIdToDelete(id)
    setModal(true)
  }

  const closeDeleteModal = (): void => {
    setIdToDelete(null)
    setModal(false)
  }

  const confirmDelete = () => {
    onPhotoDelete(idToDelete)
    closeDeleteModal()
  }

  const renderPostImages = () => {
    const { photos } = post
    if (photos && photos.length) {
      return (
        <div>
          <Modal isOpen={modal} toggle={() => closeDeleteModal()}>
            <ModalHeader toggle={() => closeDeleteModal()}>Delete Image</ModalHeader>
            <ModalBody>
              This action cannot be un done.
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={() => confirmDelete()}>Confirm Delete</Button>
              <Button color="secondary" onClick={() => closeDeleteModal()}>Cancel</Button>
            </ModalFooter>
          </Modal>

          <PhotoHeader onClick={() => setShowPhotos(!showPhotos)}>Show/Hide Images</PhotoHeader>
      
          <PostPhotosShow showPhotos={showPhotos}>
            <PostImagesContainer>
              {photos.map((photo: Photo, i) => (
                <li onClick={() => showDeleteModal(photo.id)} key={i}><PostImage src={photo.url} /></li>
              ))}
            </PostImagesContainer>
          </PostPhotosShow>
        </div>
      )
    }
  }

  const onChangeLat = (value: string) => {
    if (value !== '') {
      onChange(parseFloat(value), 'lat', true)
    } else {
      onChange(value, 'lat', true)
    }
  }

  const onChangeLng = (value: string) => {
    if (value !== '') {
      onChange(parseFloat(value), 'lng', true)
    } else {
      onChange(value, 'lng', true)
    }
  }

  const { id, title, slug, titleColour, content, photo, status, order, location: { location, duration, lat, lng, hideFromBounding } } = formPost

  return (
    <FormWrapper>
      <FormGroup>
        <InputGroup>
          <InputGroupAddon>Title</InputGroupAddon>
          <Input onChange={(e: React.FormEvent<HTMLInputElement>) => onChange(e.currentTarget.value, 'title')} value={title} type="text" className="form-control" />
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <InputGroup>
          <InputGroupAddon>Slug</InputGroupAddon>
          <Input disabled value={slug} type="text" className="form-control" />
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <InputGroup>
          <InputGroupAddon>Title Colour</InputGroupAddon>
          <Input onChange={(e: React.FormEvent<HTMLInputElement>) => onChange(e.currentTarget.value, 'titleColour')} value={titleColour} type="text" className="form-control" />
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <InputGroup>
          <InputGroupAddon>Main Photo</InputGroupAddon>
          <Input onChange={(e: React.FormEvent<HTMLInputElement>) => onChange(e.currentTarget.value, 'photo')} value={photo} type="text" className="form-control" />
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <InputGroup>
          <InputGroupAddon>Location</InputGroupAddon>
          <Input onChange={(e: React.FormEvent<HTMLInputElement>) => onChange(e.currentTarget.value, 'location', true)} value={location} type="text" className="form-control" />
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <InputGroup>
          <InputGroupAddon>Order (dsc by date)</InputGroupAddon>
          <input onChange={(e: React.FormEvent<HTMLInputElement>) => onChange(new Date(e.currentTarget.value), 'order')} value={moment(Number(order)).format('yyyy-MM-DD')} type="date" className="date-time" />
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <InputGroup>
          <InputGroupAddon>Duration</InputGroupAddon>
          <Input onChange={(e: React.FormEvent<HTMLInputElement>) => onChange(Number(e.currentTarget.value), 'duration', true)} value={duration} type="text" className="form-control" />
      
          <InputGroupAddon>Lat</InputGroupAddon>
          <Input onChange={(e: React.FormEvent<HTMLInputElement>) => onChangeLat(e.currentTarget.value)} value={lat} type="number" className="form-control" />
      
          <InputGroupAddon>Lng</InputGroupAddon>
          <Input onChange={(e: React.FormEvent<HTMLInputElement>) => onChangeLng(e.currentTarget.value)} value={lng} type="number" className="form-control" />
      
          <InputGroupAddon>Status</InputGroupAddon>
          <Select value={status} onChange={(e: React.FormEvent<HTMLSelectElement>) => onChange(e.currentTarget.value, 'status')} >
            <Option value="draft">Draft</Option>
            <Option value="live">Live</Option>
          </Select>

          <InputGroupAddon>Hide</InputGroupAddon>
          <Input onChange={() => onChange(!hideFromBounding, 'hideFromBounding', true)} value={hideFromBounding} checked={hideFromBounding} type="checkbox" className="form-control" />{' '}
        </InputGroup>
      </FormGroup>
      {id && (
        <FormGroup>
          <InputGroup>
            <InputGroupAddon>Images</InputGroupAddon>
            {renderAddPostImage()}
          </InputGroup>
          {renderPostImages()}
        </FormGroup>
      )}
      <FormGroup>
        <InputGroup>
          <InputGroupAddon>Content</InputGroupAddon>
          <MarkDownEditor>
            <Editor onChange={(value: string) => onChange(value, 'content')} value={content} />
          </MarkDownEditor>
        </InputGroup>
      </FormGroup>
    </FormWrapper>
  )

}

export default Form