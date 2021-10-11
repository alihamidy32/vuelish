<template>
  <footer>
    <div class="footer-container">
      <div class="footer-control">
        <div class="footer-content">
          <div class="fo-about-us">
            <div class="about-us-title">
              <h3 class="title">
                درباره ما
              </h3>
            </div>
            <div class="about-us-content">
              <p class="desc">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و....
              </p>
            </div>
          </div>
          <div class="fo-contact-us">
            <div class="contact-us-title">
              <h3 class="title">
                تماس با ما
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
footer{
  background-color: rgba(65, 61, 61, 0.774);
  position: relative;
  top:  20rem;
  margin-top: 1rem;
  border-top: 5px solid red;
  z-index: 100;
  height: auto;
  opacity: .8;
}
.footer-container{
  max-width: 95rem;
  margin: auto;
  padding: 0 2.5rem;
}
.footer-control{
  padding: 3rem 0;
}
.footer-content{
  display: grid;
  grid-template-columns: repeat(18 , minmax(0 ,1fr));
  gap: 1rem;
}
.fo-about-us{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.fo-contact-us{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  grid-column: 12/13;
}
.about-us-title{
  border-bottom: 3px solid orangered;
  width: 25rem;
}
.contact-us-title{
  border-bottom: 3px solid orangered;
  width: 15rem;
}
.title{
  font-family: 'shabnam';
  color: white;
  margin-bottom: .5rem;
}
.about-us-content{
  width: 25rem;
  margin-top: 1rem;
}
.desc{
  font-family: 'vazir';
  color: rgba(245, 235, 235, 0.836);
  text-align: justify;
}


@media screen and (max-width:50.6875rem) {
  footer{
  background-color: rgba(65, 61, 61, 0.774);
  position: relative;
  top:  5rem;
  margin-top: 1rem;
  border-top: 5px solid red;
  z-index: 100;
  height: auto;
  opacity: .8;
}
.footer-container{
  max-width: 95rem;
  margin: auto;
  padding: 0 2rem;
}
.footer-control{
  padding: 2.5rem 0;
}
.footer-content{
  display: grid;
  grid-template-columns: repeat(10 , minmax(0 ,1fr));
  gap: 1rem;
}
.fo-about-us{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.fo-contact-us{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  grid-column: 7/8;
}
.about-us-title{
  border-bottom: 3px solid orangered;
  width:15rem;
}
.contact-us-title{
  border-bottom: 3px solid orangered;
  width: 15rem;
}
.title{
  font-family: 'shabnam';
  color: white;
  margin-bottom: .5rem;
}
.about-us-content{
  width: 15rem;
  margin-top: 1rem;
}
.desc{
  font-family: 'vazir';
  color: rgba(245, 235, 235, 0.836);
  text-align: justify;
}
}

@media screen and (max-width:50.6875rem) {
  footer{
  background-color: rgba(65, 61, 61, 0.774);
  position: relative;
  top:  5rem;
  margin-top: 1rem;
  border-top: 5px solid red;
  z-index: 100;
  height: auto;
  opacity: .8;
}
.footer-container{
  max-width: 95rem;
  margin: auto;
  padding: 0 1.2rem;
}
.footer-control{
  padding: 1.8rem 0;
}
.footer-content{
  display: grid;
  grid-template-columns: repeat(6 , minmax(0 ,1fr));
  gap: 1rem;
}
.fo-about-us{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.fo-contact-us{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  grid-column: 5/6;
}
.about-us-title{
  border-bottom: 3px solid orangered;
  width:12rem;
}
.contact-us-title{
  border-bottom: 3px solid orangered;
  width: 5rem;
}
.title{
  font-family: 'shabnam';
  color: white;
  margin-bottom: .5rem;
}
.about-us-content{
  width: 12rem;
  margin-top: 1rem;
}
.desc{
  font-family: 'vazir';
  color: rgba(245, 235, 235, 0.836);
  text-align: justify;
}
}
</style>