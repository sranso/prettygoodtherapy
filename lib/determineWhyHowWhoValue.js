import parent from './parent'

const determineWhyHowWhoValue = (doc) => {
	// #Modal matches for can / would / will etc
	if (doc.match('#Modal').out('array').length) {
		return `You can do this by remembering that the present moment is all we have – stay with it. And also, all your problems stem from your ${parent()}.`
  	}

	return `Because of your ${parent()}.`
  
}

export default determineWhyHowWhoValue