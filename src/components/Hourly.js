import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import {
  WiDaySunny,
  WiDayCloudy,
  WiFog,
  WiSnowflakeCold,
  WiUmbrella,
  WiRainMix,
  WiThunderstorm,
  WiWindDeg,
} from "react-icons/wi";

const Loading = styled.div`
  width: 700px;
  height: 350px;
  text-align: center;
  line-height: 350px;
  font-size: 3rem;
  font-weight: 700;
`;

const AllContainer = styled.div`
  width: 1190px;
  height: 530px;
  display: flex;
  margin: 30px auto 0;
  background-color: white;
  overflow: auto;
`;

const Data = styled.div`
  width: 4760px;
  height: 510px;
  display: flex;
`;

const Show = styled.div`
  width: 110px;
  height: 500px;
  box-sizing: border-box;
  /* border-left: 1px solid  lightgray; */
  border-right: 1px solid lightgray;
`;

const ShowBar = styled.div`
  width: 110px;
  height: 5px;
  margin-bottom: 5px;
  background-color: white;
  transition: background-color 0.5s;

  ${Show}:hover & {
    background-color: #f35b5b;
    transition: background-color 0.5s;
  }
`;

const ShowContent = styled.div`
  width: 110px;
  height: 480px;

  & > p {
    font-size: 1.2rem;
    text-align: center;
  }

  & > p:first-of-type {
    margin-top: 10px;
    font-weight: 600;
  }

  & > p:not(:first-of-type, :last-of-type) {
    margin-bottom: 20px;
  }
`;

const IconContainer = styled.div`
  width: 100px;
  height: 285px;
  margin: 15px auto;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const Icon = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  margin-bottom: ${(props) => 8 * props.temp}px;
`;

const Hide = styled.div`
  width: ${(props) => (props.isOpen ? "230px" : 0)};
  height: 510px;
  overflow: hidden;
  transition-property: width;
  transition-duration: 0.5s;
`;

const HideBar = styled.div`
  width: 230px;
  height: 5px;
  background-color: #f35b5b;
  margin-bottom: 5px;
`;

const HideContent = styled.div`
  width: 230px;
  height: 500px;
  padding: 10px 10px 10px 20px;

  & > p {
    font-size: 1.15rem;
    margin-bottom: 15px;
  }

  & > p:first-of-type {
    margin: 5px 0 40px;
    font-weight: 600;
  }

  & > p:not(:first-of-type, :last-of-type) {
    margin-bottom: 40px;
  }

  & > p:last-of-type {
    margin-top: 40px;
  }
`;

const Hourly = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hours, setHours] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getHourly = async () => {
      setLoading(true);
      try {
        const hourly = await axios
          .get(
            "https://api.openweathermap.org/data/2.5/forecast?q=seoul&appid=18bcd66d8c2f78ea7c4d91ad9ee784bc&units=metric&lang=kr&cnt=14"
          )
          .then((response) => {
            const datas = response.data.list;
            const newData = datas.map((data) => {
              return {
                ...data,
                isopen: false,
              };
            });

            setHours(newData);
          });
      } catch (error) {
        console.log("에러 :", error);
      }
      setLoading(false);
    };
    getHourly();
  }, []);

  const selectIcon = (hour) => {
    let iconId =
      hour.weather[0].id === 800 ? 0 : (hour.weather[0].id / 100).toFixed(0);

    switch (iconId) {
      case 0:
        return <WiDaySunny size="3rem" color="#ff9100" />;
      case "2":
        return <WiThunderstorm size="3rem" color="#682cbf" />;
      case "3":
        return <WiRainMix size="3rem" color="#77d195" />;
      case "5":
        return <WiUmbrella size="3rem" color="#526eff" />;
      case "6":
        return <WiSnowflakeCold size="3rem" color="#c4f5ff" />;
      case "7":
        return <WiFog size="3rem" color="#7c5547" />;
      case "8":
        return <WiDayCloudy size="3rem" color="#5f7d8e" />;
      default:
        return <WiWindDeg size="3rem" />;
    }
  };

  if (loading) {
    return <Loading>일기예보 불러오는 중...</Loading>;
  }

  if (!hours) {
    return null;
  }

  return (
    <AllContainer>
      {hours.map((hour) => (
        <Data key={hour.dt}>
          <Show
            onClick={() => {
              setHours((hours) => {
                const hoursData = hours.map((toggleHour) =>
                  toggleHour.dt === hour.dt
                    ? { ...toggleHour, isopen: !toggleHour.isopen }
                    : toggleHour
                );

                return hoursData;
              });
            }}
          >
            <ShowBar />
            <ShowContent>
              <p>{hour.dt_txt.substr(11, 5)}</p>
              <IconContainer>
                <Icon temp={hour.main.temp}>{selectIcon(hour)}</Icon>
              </IconContainer>
              <p>{hour.main.temp}℃</p>
              <p>{hour.wind.speed}m/s</p>
              <p>{hour.pop}%</p>
              <p>{hour.hasOwnProperty("rain") ? hour.rain["3h"] : "0.0"}mm</p>
            </ShowContent>
          </Show>
          <Hide isOpen={hour.isopen}>
            <HideBar />
            <HideContent>
              <p>{hour.dt_txt}</p>
              <p>{hour.weather[0].description}</p>
              <p>체감온도 : {hour.main.feels_like}℃</p>
              <p>습도 : {hour.main.humidity}%</p>
              <p>구름량(흐림 수준) : {hour.clouds.all}%</p>
              <p>
                강우량 : {hour.hasOwnProperty("rain") ? hour.rain["3h"] : "0.0"}
                mm
              </p>
              <p>
                적설량 : {hour.hasOwnProperty("snow") ? hour.snow["3h"] : "0.0"}
                mm
              </p>
            </HideContent>
          </Hide>
        </Data>
      ))}
    </AllContainer>
  );
};

export default Hourly;
