import React, { Component } from "react";
import ChildProps from "./ChildProps";

export default class ParentProp extends Component {
  imageURL1 =
    "https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/t/h/thor-main-poster_1_.jpg";
  imageURL2 =
    "https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/m/i/minions_2_-_kc_01.7.22_1__1.jpg";
  imageURL3 =
    "https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/_/i/_i_n_tho_i_en_-_24.06.2022_2.jpg";

  movie1 = {
    name: "Em và Trịnh",
    imageUrl:
      "https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/t/h/thor-main-poster_1_.jpg",
  };
  movie2 = {
    name: "Thế giới khủng long",
    imageUrl:
      "https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/r/s/rsz_jurassic_world_dominion_-10062022_2.jpg",
  };
  movie3 = {
    name: "Crazy Phone Call",
    imageUrl:
      "https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/_/i/_i_n_tho_i_en_-_24.06.2022_2.jpg",
  };

  render() {
    return (
      <div>
        <h4>ParentProp</h4>
        <div className="row w-75 mx-auto">
          <div className="col-4">
            <ChildProps movie={this.movie1} />
          </div>
          <div className="col-4">
            <ChildProps movie={this.movie2} />
          </div>
          <div className="col-4">
            <ChildProps movie={this.movie3} />
          </div>
        </div>
      </div>
    );
  }
}
