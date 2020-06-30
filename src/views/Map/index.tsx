import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import Map from '../../components/Map';
import LocationList from '../../components/LocationList';
import { All_POSTS } from '../../queries'
import Loading from '../../components/Loading';
import { MapViewWrapper, MapWrapper, ListWrapper, NavigationToggle, TitleWrapper, Title } from './styles';

const MapView: React.FC = () => {

  const [ hoveredLocationKey, setHoveredLocationKey ] = useState<null | number>(null)
  const [ fade, setFade ] = useState<boolean>(false)
  const [ navigationShown, setNavigationShown ] = useState<boolean>(true)
  const { loading, error, data } = useQuery(All_POSTS, { variables: { status: 'live' } });

  if (!loading) {
    setTimeout(() => {
      setFade(true)
    }, 1000)
  }

  const listItemHovered = (hoveredLocationKey: number): void => setHoveredLocationKey(hoveredLocationKey)

  const toggleNavigation = (navigationShown: boolean): void => setNavigationShown(!navigationShown)

  if (loading || error) return <Loading fade={fade} />;

  if (!data.allPosts) return null;

  return (
      <MapViewWrapper>
          <TitleWrapper>
              <Title navigation={false}>
                  Kirsty and Petes Travel Adventure
              </Title>
          </TitleWrapper>
          <MapWrapper navigationShown={navigationShown}>
              <NavigationToggle onClick={() => toggleNavigation(navigationShown)} />
              <Map posts={data.allPosts} hoveredLocationKey={hoveredLocationKey} />
          </MapWrapper>
          <ListWrapper navigationShown={navigationShown}>
              <Title navigation>
                  Kirsty and Petes Travel Adventure
              </Title>
              <LocationList posts={data.allPosts} listItemHovered={listItemHovered} />
          </ListWrapper>
      </MapViewWrapper>
  )
}

export default MapView;