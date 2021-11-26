# App Rating Scrapper

## https://app-rating-scrapper.herokuapp.com/

Example:

POST `route: "/api/rating"`

body:

```
{
    appStorePage: "https://apps.apple.com/br/app/iza/id1526181722",
    playStorePage: "https://play.google.com/store/apps/details?id=vc.com.iza.izaapp"
}
```

returns json

```
{
  "appStoreRating": 4.9,
  "playStoreRating": 4.7
}
```
