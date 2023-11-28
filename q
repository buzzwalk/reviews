[1mdiff --git a/frontend/package.json b/frontend/package.json[m
[1mindex 1852706..4df7933 100644[m
[1m--- a/frontend/package.json[m
[1m+++ b/frontend/package.json[m
[36m@@ -1,5 +1,5 @@[m
 {[m
[31m-  "homepage": "https://buzzwalk.github.io/gtreviews",[m
[32m+[m[32m  "homepage": "https://buzzwalk.github.io/reviews",[m
   "name": "frontend",[m
   "version": "0.1.0",[m
   "private": true,[m
[1mdiff --git a/frontend/src/App.js b/frontend/src/App.js[m
[1mindex b9760c3..eca6eff 100644[m
[1m--- a/frontend/src/App.js[m
[1m+++ b/frontend/src/App.js[m
[36m@@ -68,22 +68,22 @@[m [mconst App = () => {[m
             justifyContent: "space-around",[m
             alignSelf: "center"[m
           }}>[m
[31m-              <a href='/classes'>[m
[32m+[m[32m              <a href='/reviews/classes'>[m
                 <Button >[m
                   Classes[m
                 </Button>[m
               </a>[m
[31m-              <a href='/professors'>[m
[32m+[m[32m              <a href='/reviews/professors'>[m
                 <Button>[m
                   Professors[m
                 </Button>[m
               </a>[m
[31m-              <a href='/apartments'>[m
[32m+[m[32m              <a href='/reviews/apartments'>[m
                 <Button>[m
                   Housing[m
                 </Button>[m
               </a>[m
[31m-              <a href='/dininghalls'>[m
[32m+[m[32m              <a href='/reviews/dininghalls'>[m
                 <Button>[m
                   Dining Halls[m
                 </Button>[m
[1mdiff --git a/frontend/src/components/CoolSearchbar.js b/frontend/src/components/CoolSearchbar.js[m
[1mindex 08fc341..47ac71a 100644[m
[1m--- a/frontend/src/components/CoolSearchbar.js[m
[1m+++ b/frontend/src/components/CoolSearchbar.js[m
[36m@@ -51,13 +51,13 @@[m [mexport default function CoolSearchBar() {[m
 [m
     function handleSubmit(location){[m
         if(reviewable === "dining") {[m
[31m-            navigate('/dininghallreviews', { state: {diningHall: location} });[m
[32m+[m[32m            navigate('/reviews/dininghallreviews', { state: {diningHall: location} });[m
         } else if (reviewable === "dorms") {[m
[31m-            navigate('/dormreviews', { state: { dorm: location }});[m
[32m+[m[32m            navigate('/reviews/dormreviews', { state: { dorm: location }});[m
         } else if (reviewable === "classes") {[m
[31m-            navigate('/classreviews', { state: {classes: location}})[m
[32m+[m[32m            navigate('/reviews/classreviews', { state: {classes: location}})[m
         } else if (reviewable === "professors") {[m
[31m-            navigate('/profreviews', { state: {prof: location}})[m
[32m+[m[32m            navigate('/reviews/profreviews', { state: {prof: location}})[m
         }[m
         [m
         navigate(0)[m
[1mdiff --git a/frontend/src/components/navbar.js b/frontend/src/components/navbar.js[m
[1mindex dd32301..892822c 100644[m
[1m--- a/frontend/src/components/navbar.js[m
[1m+++ b/frontend/src/components/navbar.js[m
[36m@@ -33,13 +33,13 @@[m [mexport default function Navbar() {[m
 [m
     function handleSubmit(location){[m
         if(reviewable === "dining") {[m
[31m-            navigate('/dininghallreviews', { state: {diningHall: location} });[m
[32m+[m[32m            navigate('/reviews/dininghallreviews', { state: {diningHall: location} });[m
         } else if (reviewable === "dorms") {[m
[31m-            navigate('/dormreviews', { state: { dorm: location }});[m
[32m+[m[32m            navigate('/reviews/dormreviews', { state: { dorm: location }});[m
         } else if (reviewable === "classes") {[m
[31m-            navigate('/classreviews', { state: {classes: location}})[m
[32m+[m[32m            navigate('/reviews/classreviews', { state: {classes: location}})[m
         } else if (reviewable === "professors") {[m
[31m-            navigate('/profreviews', { state: {prof: location}})[m
[32m+[m[32m            navigate('/reviews/profreviews', { state: {prof: location}})[m
         }[m
         [m
         window.location.reload()[m
[1mdiff --git a/frontend/src/components/overview/ApartmentReviewOverview.js b/frontend/src/components/overview/ApartmentReviewOverview.js[m
[1mindex bfdfe06..bc01fa5 100644[m
[1m--- a/frontend/src/components/overview/ApartmentReviewOverview.js[m
[1m+++ b/frontend/src/components/overview/ApartmentReviewOverview.js[m
[36m@@ -55,7 +55,7 @@[m [mexport default function ApartmentReviewOverview() {[m
     }, [options]);[m
 [m
     const handleDormSelect = (dorm) => {[m
[31m-        navigate('/dormreviews', { state: { dorm }});[m
[32m+[m[32m        navigate('/reviews/dormreviews', { state: { dorm }});[m
     };[m
 [m
     [m
[1mdiff --git a/frontend/src/components/overview/ClassesReviewOverview.js b/frontend/src/components/overview/ClassesReviewOverview.js[m
[1mindex 2b6c241..bb0d89d 100644[m
[1m--- a/frontend/src/components/overview/ClassesReviewOverview.js[m
[1m+++ b/frontend/src/components/overview/ClassesReviewOverview.js[m
[36m@@ -37,7 +37,7 @@[m [mexport default function ClassReviewOverview() {[m
     }, [numLoad]);[m
 [m
     const handleDiningHallSelect = (classes) => {[m
[31m-        navigate('/classreviews', { state: { classes }});[m
[32m+[m[32m        navigate('/reviews/classreviews', { state: { classes }});[m
     };[m
 [m
     return ([m
[1mdiff --git a/frontend/src/components/overview/DiningReviewOverview.js b/frontend/src/components/overview/DiningReviewOverview.js[m
[1mindex 68cfca1..3417b28 100644[m
[1m--- a/frontend/src/components/overview/DiningReviewOverview.js[m
[1m+++ b/frontend/src/components/overview/DiningReviewOverview.js[m
[36m@@ -46,7 +46,7 @@[m [mexport default function DiningHallReviewOverview() {[m
     }[m
 [m
     const handleDiningHallSelect = (diningHall) => {[m
[31m-        navigate('/dininghallreviews', { state: { diningHall }});[m
[32m+[m[32m        navigate('/reviews/dininghallreviews', { state: { diningHall }});[m
     };[m
 [m
     return ([m
[1mdiff --git a/frontend/src/components/overview/ProfessorsReviewOverview.js b/frontend/src/components/overview/ProfessorsReviewOverview.js[m
[1mindex d8b144c..2c3092c 100644[m
[1m--- a/frontend/src/components/overview/ProfessorsReviewOverview.js[m
[1m+++ b/frontend/src/components/overview/ProfessorsReviewOverview.js[m
[36m@@ -29,7 +29,7 @@[m [mexport default function ProfessorsReviewOverview() {[m
         );[m
     }[m
     const handleDiningHallSelect = (prof) => {[m
[31m-        navigate('/profreviews', { state: { prof }});[m
[32m+[m[32m        navigate('/reviews/profreviews', { state: { prof }});[m
     };[m
 [m
     return ([m
[1mdiff --git a/frontend/src/components/reviews/ViewProfessorReviewInfo.js b/frontend/src/components/reviews/ViewProfessorReviewInfo.js[m
[1mindex aab9b88..6ff3ce9 100644[m
[1m--- a/frontend/src/components/reviews/ViewProfessorReviewInfo.js[m
[1m+++ b/frontend/src/components/reviews/ViewProfessorReviewInfo.js[m
[36m@@ -7,8 +7,8 @@[m [mimport { useLocation } from 'react-router-dom';[m
 [m
 import {[m
     Box,[m
[31m-    Flex,[m
[31m-    Text[m
[32m+[m[32m    Text,[m
[32m+[m[32m    Flex[m
 } from "@chakra-ui/react"[m
 [m
 export default function ViewProfessorReviewInfo({ prof }) { [m
[36m@@ -39,30 +39,14 @@[m [mexport default function ViewProfessorReviewInfo({ prof }) {[m
         const profRef = collection(db, "Professors", profLoc, "Reviews");[m
         fetchDormReviews(profRef, setPreviewCardsInfo)[m
 [m
[31m-        console.log(profData)[m
[32m+[m[32m        console.log(profData.id)[m
     }, [prof]);[m
 [m
[31m-    const [averageRating, setAverageRating] = useState(5);[m
[31m-[m
[31m-    useEffect(() => {[m
[31m-        if (previewCardsInfo.length == 0) {[m
[31m-            return;[m
[31m-        }[m
[31m-[m
[31m-        let total = 0[m
[31m-        for (const review of previewCardsInfo) {[m
[31m-            total += review.rating[m
[31m-        }[m
[31m-        total /= previewCardsInfo.length[m
[31m-[m
[31m-        setAverageRating(total)[m
[31m-    }, [previewCardsInfo])[m
[31m-[m
     return ([m
         <>[m
             <Navbar />[m
             <Box className="reviewoverview" style={{padding: "2em"}}>[m
[31m-                [m
[32m+[m[41m               [m
                 <Flex[m
                     flexDirection="row"[m
                     style={{[m
[36m@@ -82,7 +66,6 @@[m [mexport default function ViewProfessorReviewInfo({ prof }) {[m
                         {previewCardsInfo.length == 0 && <Text>[m
                             No reviews yet[m
                         </Text>}[m
[31m-[m
                         {previewCardsInfo.length != 0 &&[m
                         <div className="previews" style={{marginLeft: "-7px"}}>[m
                             {getPreviewCardsInfo(previewCardsInfo)}[m
[36m@@ -91,6 +74,7 @@[m [mexport default function ViewProfessorReviewInfo({ prof }) {[m
                     </Box>[m
                 </Flex>[m
             </Box>[m
[32m+[m
         </>[m
     );[m
 }[m
[1mdiff --git a/frontend/src/index.js b/frontend/src/index.js[m
[1mindex 487320a..d87ac44 100644[m
[1m--- a/frontend/src/index.js[m
[1m+++ b/frontend/src/index.js[m
[36m@@ -22,47 +22,47 @@[m [mimport ViewProfessorReviewInfo from './components/reviews/ViewProfessorReviewInf[m
 [m
 const router = createBrowserRouter([[m
   {[m
[31m-    path: '/',[m
[32m+[m[32m    path: '/reviews',[m
     element: <App />,[m
   },[m
   {[m
[31m-    path: '/review',[m
[32m+[m[32m    path: '/reviews/review',[m
     element: <AddReview />,[m
   },[m
   {[m
[31m-    path: "/landing",[m
[32m+[m[32m    path: "/reviews/landing",[m
     element: <Landing />[m
   },[m
   {[m
[31m-    path: "/professors",[m
[32m+[m[32m    path: "/reviews/professors",[m
     element: <ProfessorsReviewOverview />[m
   },[m
   {[m
[31m-    path: "/classes",[m
[32m+[m[32m    path: "/reviews/classes",[m
     element: <ClassesReviewOverview />[m
   },[m
   {[m
[31m-    path: "/apartments",[m
[32m+[m[32m    path: "/reviews/apartments",[m
     element: <ApartmentReviewOverview />[m
   },[m
   {[m
[31m-    path: "/dininghalls",[m
[32m+[m[32m    path: "/reviews/dininghalls",[m
     element: <DiningReviewOverview />[m
   },[m
   {[m
[31m-    path: "/dininghallreviews",[m
[32m+[m[32m    path: "/reviews/dininghallreviews",[m
     element: <ViewDiningHallReviewInfo />[m
   },[m
   {[m
[31m-    path: "/dormreviews",[m
[32m+[m[32m    path: "/reviews/dormreviews",[m
     element: <ViewDormReviewInfo />[m
   }, [m
   {[m
[31m-    path: "/classreviews",[m
[32m+[m[32m    path: "/reviews/classreviews",[m
     element: <ViewClassesReviewInfo />[m
   }, [m
   {[m
[31m-    path: "/profreviews",[m
[32m+[m[32m    path: "/reviews/profreviews",[m
     element: <ViewProfessorReviewInfo />[m
   }[m
 ])[m
