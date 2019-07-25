<template v-if="childDataLoaded">
  <section>
    <section class="gallery">
      <app-gallery-item
        v-for="(image, index) in images"
        :key="index"
        :image="image.thumb"
        @click.native="changeByIndex(index)"
      ></app-gallery-item>
    </section>
    <article class="gallery-preview">
      <app-gallery-item-preview ref="galleryPreviewImage" class="gallery-preview--image" :class="imageIsChanging ? 'image-changing' : ''" :image="images[currentImage].thumb"></app-gallery-item-preview>
      <div class="gallery-nav">
        <button
          class="gallery-nav--btn nav-btn--prev"
          ref="navBtnPrev"
          @click="changeGalleryPreview"
        ></button>
        <button
          class="gallery-nav--btn nav-btn--next"
          ref="navBtnNext"
          @click="changeGalleryPreview"
        ></button>
      </div>
    </article>
  </section>
</template>

<script>
import AppGalleryItem from "@/components/Cars/CarInfo/Gallery/item";
import AppGalleryItemPreview from "@/components/Cars/CarInfo/Gallery/preview";

export default {
	components: {
		AppGalleryItem,
		AppGalleryItemPreview
	},
	props: ["images"],
	data() {
		return {
			imagesLoaded: false,
			currentImage: 0,
			imageIsChanging: false,
			canChangeImage: true
		};
	},
	methods: {
		changeByIndex(index) {
			if (this.canChangeImage) {
				this.imageIsChanging = true;
				this.canChangeImage = false;
				setTimeout(() => {
					this.currentImage = index;
					setTimeout(() => {
						this.imageIsChanging = false;						
					}, 200);
					this.canChangeImage = true;
				}, 100);
			}
		},
		changeGalleryPreview(e) {
			if (this.canChangeImage) {
				this.imageIsChanging = true;
				this.canChangeImage = false;
				setTimeout(() => {
					switch (e.target) {
						case this.$refs.navBtnPrev:
							this.currentImage--;
							if (this.currentImage < 0) {
								this.currentImage = this.images.length - 1;
							}
							break;
						case this.$refs.navBtnNext:
							this.currentImage++;
							if (this.currentImage > this.images.length - 1) {
								this.currentImage = 0;
							}
							break;
					}
					setTimeout(() => {
						this.imageIsChanging = false;						
					}, 200);
					this.canChangeImage = true;
				}, 100);
			}
		}
	}
};
</script>

<style>
.gallery {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}
.gallery-preview {
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #ECF0F1;
	position: relative;
	height: 580px;
}
.gallery-nav {
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
}
.gallery-nav--btn {
	position: absolute;
	width: 40%;
	height: 100%;
	background-color: transparent;
	border: none;
	outline-color: transparent;
	cursor: pointer;
}
.gallery-nav--btn::before {
	font-family: "Flat-UI-Pro-Icons";
	position: absolute;
	font-size: 1.6em;
	border-radius: 50%;
	border: 4px solid #34495e;
	background-color: #ffffff;
	padding: 10px;
	text-align: center;
	opacity: 0;
	transition: opacity 0.2s linear;
	color: #34495e;
	transform: translateY(-50%);
}
.gallery-nav--btn:hover::before {
	opacity: 0.5;
}
.gallery-nav--btn.nav-btn--prev::before {
	content: "\e606";
	left: 20px;
}
.gallery-nav--btn.nav-btn--next::before {
	content: "\e607";
	right: 20px;
}
.gallery-nav--btn.nav-btn--prev {
	left: 0;
}
.gallery-nav--btn.nav-btn--next {
	right: 0;
}
.gallery-preview--image {
	transition: opacity 0.1s linear;
	opacity: 1;
}
.gallery-preview--image.image-changing {
	opacity: 0;
}
@media screen and (max-width: 720px) {
	.gallery-preview {
		max-height: 320px;
		overflow: hidden;
		height: unset;
	}	
}
</style>
