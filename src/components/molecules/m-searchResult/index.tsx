import blockImage from 'assets/images/task-square.png';
import flexImage from 'assets/images/category.png';
import { SetStateAction, useEffect, useState } from 'react';
import useFetchHook from 'hooks/useFetchHook';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Pagination from '../m-pagination';

interface EventProps {
  eventCenters: {
    id: string;
    name: string;
    description: string;
    price: number;
    capacity: number;
    squareFoot: number;
    address: string;
    yearBuilt: string;
    city: string;
    area: string;

    country: string;
    longtitude: string;
    latitude: string;
    typeId: string;
    status: string;
    state: {
      id: string;
      name: string;
    };
    images: {
      id: string;
      url: string;
    }[];
    facilities: {
      id: string;
      capacity: number;
      facility: {
        id: string;
        name: string;
      };
    }[];
    types: {
      id: string;
      name: string;
    };
    eventTypes: {
      id: string;
      name: string;
    }[];
  };
}

const SearchResult = () => {
  const navigate = useNavigate();
  const [block, setBlock] = useState<boolean>(false);
  const [eventCenters, setEventCenters] = useState<EventProps['eventCenters'][]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [searchParams] = useSearchParams();
  const eventType = searchParams.get('eventType') || '';
  const location = searchParams.get('location') || '';
  const minPrice = searchParams.get('minPrice') || '';
  const maxPrice = searchParams.get('maxPrice') || '';
  const eventTypeName = searchParams.get('eventTypeName');
  const eventCenterType = searchParams.get('eventCenterType');
  const handleBlock = () => {
    setBlock(true);
  };

  const handleFlex = () => {
    setBlock(false);
  };
  const itemsPerPage = 10;

  const [, GetAllEventCenters] = useFetchHook('event-center/get-all-event-center');
  useEffect(() => {
    const fetchEventCenter = async () => {
      try {
        const queryString = new URLSearchParams({
          page: currentPage.toString(),
          pageSize: itemsPerPage.toString(),
          eventTypeId: eventType || '',
          eventCenterTypeId: eventCenterType || '',
          location: location || '',
          minPrice: minPrice?.toString() || '',
          maxPrice: maxPrice?.toString() || '',
        }).toString();
        console.log('Query String:', queryString);
        const response = await GetAllEventCenters.GetPayload(queryString);

        console.log('API Response:', response);
        setEventCenters(
          Array.isArray(response.data.eventCenters) ? response.data.eventCenters : [],
        );
        setTotalPages(Math.ceil(response.data.total / itemsPerPage));
      } catch (error) {
        console.error('Error fetching event centers:', error);
      }
    };

    fetchEventCenter();
  }, [currentPage, eventType, location, minPrice, maxPrice]);
  const handlePageChange = (page: SetStateAction<number>) => {
    setCurrentPage(page);
  };
  const handleBooking = (id: string) => {
    navigate(`/event-details/${id}`);
  };

  return (
    <div
      className={`w-full  px-3 pb-7 text-left font-[inter] md:w-[70%] md:py-7  lg:pr-20 ${
        block ? 'md:pr-10' : 'md:pr-20'
      } `}
    >
      <p className="text-sm font-semibold text-[#767676]">
        {eventCenters.length} search results for
      </p>
      <div className="flex items-center justify-between">
        <h3 className=" text-base font-semibold text-black md:text-2xl">
          {[
            eventTypeName && eventTypeName,
            location && location,
            minPrice && maxPrice && `₦${minPrice} - ₦${maxPrice}`,
          ]
            .filter(Boolean)
            .join(', ')}
        </h3>
        <div className="flex items-center justify-between gap-2">
          <button type="button" onClick={handleFlex} aria-label="Set Flex Layout">
            <img src={flexImage} alt="Flex Layout" />
          </button>
          <button type="button" onClick={handleBlock} aria-label="Set Block Layout">
            <img src={blockImage} alt="Block Layout" />
          </button>
        </div>
      </div>
      <div
        className={`grid w-full grid-cols-1 justify-between gap-10 py-10 ${
          block ? 'md:grid-cols-1' : 'md:grid-cols-1 lg:grid-cols-2'
        }`}
      >
        {Array.isArray(eventCenters) &&
          Array.from(
            new Map(
              eventCenters.map((center: EventProps['eventCenters']) => [
                center.name.toLowerCase(),
                center,
              ]),
            ).values(),
          )

            ?.sort((a: { name: string }, b: { name: string }) => a.name.localeCompare(b.name))
            .map((item) => {
              const { id, name, price, capacity, facilities, images, address } = item;
              const eventCenterImages = images?.[0]?.url || 'default-image.png';

              return (
                <div
                  key={id}
                  className={`w-full ${block ? 'flex w-full justify-between' : 'grid'}`}
                >
                  <div className={`${block ? 'flex w-full justify-between' : 'w-full'}`}>
                    <div className={` ${block ? 'flex w-2/3 gap-x-1 md:gap-x-5' : ''}`}>
                      <div
                        className={`  ${
                          block ? 'h-full w-2/3' : 'h-[150px] overflow-hidden md:h-[180px]'
                        }`}
                      >
                        <img
                          src={eventCenterImages || 'default-image.png'}
                          alt={name || 'Event Center'}
                          className="h-full w-full rounded-xl object-fill"
                        />
                      </div>
                      <div
                        className={`grid w-full justify-between ${
                          block ? 'w-full grid-cols-1 pt-0' : 'grid-cols-2 pt-3'
                        } `}
                      >
                        <div className="">
                          <h2
                            className={`font-semibold capitalize text-black ${
                              block ? 'text-[10.09px] md:text-xl' : 'text-base'
                            }`}
                          >
                            {name}
                          </h2>
                          <p
                            className={`font-semibold capitalize text-[#A2A2A2] ${
                              block ? ' text-[7.07px] md:text-sm' : 'text-xs'
                            }`}
                          >
                            {address}
                          </p>
                          <h3
                            className={`pt-1 font-semibold text-black ${
                              block ? 'text-[7.57px] md:text-sm' : 'text-xs'
                            }`}
                          >
                            Facilities
                          </h3>
                          {facilities.slice(0, 3).map((facility) => {
                            return (
                              <p
                                key={facility.id}
                                className={`font-semibold text-[#A2A2A2] ${
                                  block ? ' text-[7.07px] md:text-sm' : 'text-xs'
                                }`}
                              >
                                <span
                                  key={facility.facility.id}
                                  className="font-semibold text-[#A2A2A2]"
                                >
                                  {facility.facility.name}
                                </span>
                              </p>
                            );
                          })}
                        </div>
                        {!block && (
                          <div className="flex w-full flex-col items-end justify-between text-right">
                            <div className="flex gap-1">
                              <div>
                                <p className=" text-xs font-semibold text-primary">Very good</p>
                                <p className=" text-[10.21px] font-semibold text-[#A2A2A2]">
                                  832 reviews
                                </p>
                              </div>
                              <p className="flex items-center justify-center rounded-2xl bg-[#E1EAFC] px-3 py-1 text-center text-xs font-semibold text-primary">
                                {capacity}
                              </p>
                            </div>
                            <h3 className="text-base font-semibold text-black"> ₦{price}</h3>
                            <button
                              onClick={() => handleBooking(id)}
                              type="button"
                              className="w-full rounded-xl bg-primary py-1 font-semibold text-white"
                            >
                              See booking options
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex w-1/3">
                      {block && (
                        <div className="flex w-full flex-col items-end justify-between text-right">
                          <div className="flex gap-1">
                            <div>
                              <p className="text-[7.57px] font-semibold text-primary md:text-sm">
                                Very good
                              </p>
                              <p className="text-[6.05px] font-semibold text-[#A2A2A2] md:text-xs">
                                832 reviews
                              </p>
                            </div>
                            <p className="flex  items-center justify-center rounded-2xl bg-[#E1EAFC] px-3 py-1 text-center text-[7.57px] font-semibold md:text-xs">
                              {capacity}
                            </p>
                          </div>
                          <h3 className="text-[10.09px] font-semibold text-black md:text-xl">
                            {' '}
                            ₦{price}
                          </h3>
                          <button
                            onClick={() => handleBooking(id)}
                            type="button"
                            className="w-full rounded-xl bg-primary py-1 text-[6.5px] font-semibold text-white md:text-sm lg:w-2/3"
                          >
                            See booking options
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
      <div className="flex items-center justify-center gap-3">
        <Pagination page={currentPage} totalCount={totalPages} onPageChange={handlePageChange} />
      </div>
    </div>
  );
};
export default SearchResult;
