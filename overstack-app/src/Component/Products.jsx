import React, { useEffect, useState } from "react";
import "./Mugs.css";
import {
  ChevronDownIcon,
  CheckCircleIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@chakra-ui/icons";

import { Button, Flex, Spinner, useToast } from "@chakra-ui/react";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { Icon } from "@chakra-ui/react";
import { FiHeart } from "react-icons/fi";
import { useSelector } from "react-redux";

const Products = () => {
  const toast = useToast();
  const {category}=useParams()
  console.log(category)
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState("asc");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState(false);

  const { isAdmin } = useSelector((state) => state);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://stock-server.onrender.com/products?category=${category}&_limit=12&_page=${page}&_sort=price&_order=${order}`
      )
      .then((r) => {
        setLoading(false);
        setData(r.data);
        console.log(r.data);
      })
      .catch((err) => {
        console.log(err)
      });
  }, [page, order,category]);

  const handleDelete = (id) => {
    axios
      .delete(`https://stock-server.onrender.com/products/${id}`)
      .then((res) => {
        setData(
          data.filter((e) => {
            return e.id !== id;
          })
        );
        toast({
          title: "Delete Successfull.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((err) => console.log(err));
  };

  function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }

  const handleHeart = (id) => {
    setColor(!color);
    console.log(id);
  };

  return (
    <div className="Container">
      <h1 align="center">{toTitleCase(category)}</h1>
      <div className="SearchBy">
        <label>SortBy:</label>
        <select
          onChange={(e) => setOrder(e.target.value)}
          style={{
            width: "16%",
            border: "1px solid black",
            marginLeft: "15px",
          }}
        >
          <option name="price" value="asc">
            Price Low-High
          </option>
          <option name="price" value="desc">
            Price High-Low
          </option>
        </select>
      </div>
      {loading && (
        <Flex justifyContent={"center"}>
          <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
          mt="8%"
          />
        </Flex>
        
      )}
      <div className="MugsData">
        {!loading && data.length > 0 &&
          data.map((item) => (
            <div className="Mugs" key={item.id}>
              <div>
                {" "}
                <Icon
                  className="heart"
                  onClick={() => handleHeart(item.id)}
                  backgroundColor={color ? "red" : null}
                  cursor="pointer"
                  m="5px"
                  padding="2px"
                  color={color ? "white" : "grey"}
                  w={6}
                  h={5}
                  border="1px solid grey"
                  borderRadius="50%"
                  as={FiHeart}
                ></Icon>
              </div>
              <div>
                <img alt="some" src={item.image} width="300px !important" height="300px !important" />{" "}
              </div>
              <span>Featured</span>
              <div style={{ display: "flex" }}>
                <h1>${item.price}</h1>

                <Link to={`/products/${item.id}`}>
                  {" "}
                  <span className="icon">
                    <ChevronDownIcon />
                    More details
                  </span>
                </Link>
              </div>
              {item.count === 2 && (
                <Flex ml={"10px"}>
                  <img alt="some" src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" />{" "}
                  <img alt="some" src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" />
                </Flex>
              )}
              {item.count === 3 && (
                <Flex ml={"10px"}>
                  <img alt="some" src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" />{" "}
                  <img alt="some" src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" />
                  <img alt="some" src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" />
                </Flex>
              )}
              {item.count === 4 && (
                <Flex ml={"10px"}>
                  <img alt="some" src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" />{" "}
                  <img alt="some" src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" />
                  <img alt="some" src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" />
                  <img alt="some" src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" />
                </Flex>
              )}
              {item.count === 5 && (
                <Flex ml={"10px"}>
                  <img alt="some" src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" />{" "}
                  <img alt="some" src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" />
                  <img alt="some" src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" />
                  <img alt="some" src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" />
                  <img alt="some" src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" />
                </Flex>
              )}

              <div>
                <p>{item.name}</p>
              </div>
              <div >
                <h3>
                  {" "}
                  <CheckCircleIcon />
                  Free Shipping
                </h3>
              </div>
              {isAdmin ? (
                <div >
                  <Button
                    bg={"red"}
                    width="60%"
                    ml="20%"
                    mb="20px"
                    color="white"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </Button>
                </div>
              ) : null}
            </div>
          ))}
      </div>

      
        <div
          style={{ margin: "auto", marginTop: "50px", marginBottom: "50px" }}
        >
          <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
            <ChevronLeftIcon />
          </Button>
          <Button bg={"lightblue"}>{page}</Button>
          <Button
            disabled={data.length<12}
            onClick={() => setPage(page + 1)}
          >
            <ChevronRightIcon />
          </Button>
        </div>
      
    </div>
  );
};

export default Products;
