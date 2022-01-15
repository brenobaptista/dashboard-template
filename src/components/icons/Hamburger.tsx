interface Props {
  width: number
  height: number
}

const Hamburger = ({ width, height }: Props): JSX.Element => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 448 390'
    width={width}
    height={height}
    fill='currentColor'
    role='img'
  >
    <title>Toggle sidebar</title>
    <path d='m 12.83,352 h 249.35217 c 7.0881,0.006 12.83553,-5.7419 12.83,-12.83 v -23.34 c 0.006,-7.0881 -5.7419,-12.83553 -12.83,-12.83 H 12.83 C 5.7418969,302.99447 -0.0055311,308.7419 0,315.83 v 23.34 c -0.0055311,7.0881 5.7418969,12.83553 12.83,12.83 z M 11.830145,80.999855 326.76185,81.048145 c 7.08811,0.0055 12.83554,-5.741897 12.83,-12.83 l 0.99986,-23.339855 c 0.006,-7.088103 -5.7419,-12.835531 -12.83,-12.83 L 12.83,32 C 5.7418969,31.994469 -0.0055311,37.741897 0,44.83 l -0.999855,23.339855 c -0.005531,7.088103 5.7418969,12.835531 12.83,12.83 z M 432,167.5 H 16 c -8.836556,0 -16,7.16344 -16,16 v 17 c 0,8.83656 7.163444,16 16,16 h 416 c 8.83656,0 16,-7.16344 16,-16 v -17 c 0,-8.83656 -7.16344,-16 -16,-16 z' />
  </svg>
)

export default Hamburger
