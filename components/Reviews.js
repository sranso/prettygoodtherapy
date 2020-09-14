import reviewsStyles from './Reviews.module.css'

const Reviews = () => (
	<div className={reviewsStyles.wrapper}>
		<h2 className={reviewsStyles.title}>Testimonials</h2>
		<p>"Pretty Good Therapy has radically changed my life."<br/> – <span className={reviewsStyles.reviewer}>Tara Brach</span></p>
		<p>"A person's success in life can usually be measured by the number of uncomfortable conversations he or she is willing to have. Pretty Good Therapy helped me have those conversations."<br/> – <span className={reviewsStyles.reviewer}>Timothy Ferriss</span></p>
		<p>"The power of this website cannot be underestimated."<br/> – <span className={reviewsStyles.reviewer}>Eckhart Tolle</span></p>
		<p>"I don't give f*cks about a lot of things, but this? I would jump in front of a bus for this."<br/> – <span className={reviewsStyles.reviewer}>Mark Manson</span></p>
	</div>
)

export default Reviews