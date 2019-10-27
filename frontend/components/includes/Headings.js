import styled from 'styled-components';

const Title = styled.h1``;

const SiteHeader = styled.header.attrs(() => ({
    id: 'masthead',
    className: 'site-header'
}))``;

const SubHeader = styled.h3``;

const BillboardVideo = styled.video.attrs(() => ({
  preload: 'auto',
  autoPlay: true,
  loop: true,
  muted: true,
}))``;

const Logo = styled.span``;

const Name = styled.h1``;

export {
  Title, SiteHeader, SubHeader, BillboardVideo, Logo, Name,
};