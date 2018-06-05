const {expect} = require('chai')
const db = require('../index')
const Review = db.model('review')

describe('Review model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

const thumbsUp = true
const rating = 4
const contentDetail = "The Capitals have this because ... their team defense is machine-like, their goaltender is saving everything, and the stuff he isn't saving is bouncing off his posts. Washington owns so much of the neutral zone that it might start asking Vegas to pay rent to use it. The Caps have taken away the front of the net: 10 of the Golden Knights' past 19 goals were scored on the doorstep of the goaltender, yet they've scored none in that manner since Game 1 of the Final."


let review;
beforeEach(() => {
  review = Review.build({
     thumbsUp: thumbsUp,
     rating: rating,
     reviewDetail: contentDetail
  })
})

afterEach(() => {
    return Promise.all([
      Review.truncate({ cascade: true }),
      ]);
  });

describe('attributes definition', () => {
  it("includes 'thumbsUp' && 'rating' field ", () => {
    return review.save()
    .then((savedReview) => {
      expect(savedReview.thumbsUp).to.equal(true)
      expect(savedReview.rating).to.equal(4)
    })
  })
})

it('it can handle a long review', () => {
      return review.save()
      .then((savedReview) => {
        expect(savedReview.reviewDetail).to.equal(contentDetail);
        expect(savedReview.rating).to.equal(4);
      });
    });

}) // end describe('User model')
