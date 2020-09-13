import reviewsStyles from './Reviews.module.css'

const Reviews = () => (
	<div className={reviewsStyles.wrapper}>
		<h2 className={reviewsStyles.title}>Testimonials</h2>
		<div>
			<p>"Pretty Good Therapy has radically changed my life."<br/> – <span className={reviewsStyles.reviewer}>Tara Brach</span></p>
			<p>"This was one of the few forms of therapy I could do, given how exhausted I was all the time. I'm forever grateful."<br/> – <span className={reviewsStyles.reviewer}>Timothy Ferris</span></p>
			<p>"The power of this website cannot be underestimated."<br/> – <span className={reviewsStyles.reviewer}>Eckhart Tolle</span></p>
			<p>"I don't give f*cks about a lot of things, but this? I would jump in front of a bus for this."<br/> – <span className={reviewsStyles.reviewer}>Mark Manson</span></p>
		</div>
	</div>
)

export default Reviews