import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

import useKakaoLoader from "./useKakaoLoader";
type Props = {
  place: string;
};

const CustomKakaoLoader = ({ place }: Props) => {
  useKakaoLoader();
  const [position, setPosition] = useState<{ lat: number; lng: number }>({
    lat: 37.5665,
    lng: 126.978, // 기본 위치: 서울
  });

  const handleSearch = (address: string) => {
    if (address && window.kakao && window.kakao.maps) {
      const geocoder = new window.kakao.maps.services.Geocoder();

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      geocoder.addressSearch(address, (result: any[], status: string) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const { x, y } = result[0];
          setPosition({ lat: parseFloat(y), lng: parseFloat(x) });
        } else {
          alert("주소를 찾을 수 없습니다.");
        }
      });
    }
  };

  useEffect(() => {
    handleSearch(place);
  }, [place]);

  return (
    <Map center={position} style={{ width: "100%", height: "250px" }} level={3}>
      <MapMarker position={position}></MapMarker>
    </Map>
  );
};

export default CustomKakaoLoader;
