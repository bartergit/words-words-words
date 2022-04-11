import { useState, useEffect } from "react";
import "./post.css";

// import { ReactComponent as Heart } from "./heart.svg";

function createPost(postText, imgUrl, name, tags, author) {
  return {
    postText: postText,
    imgUrl: imgUrl,
    name: name,
    tags: tags,
    author: author,
  };
}

function getListOfPosts() {
  return [
    createPost(
      `ооо хаааайп новый бэтмен
  (Зои Кравец для привлечения внимания)
  --------------------------------------------------------------------------
  Новый Бэтмен велико… неоднозначный. Во-первых, он значительно выделяется на фоне Нолановского Бэтмена - переплюнуть его в рамках блокбастера было бы практически невозможно, поэтому Мэтт Ривз вернулся к истокам героя - к детективному жанру. И отсюда исходят как основные его болячки, так и наиболее удачные находки.
  Во-первых, да, это куда больше нуарный детектив, чем супергеройское кино. Паттисон большую часть экранного времени разгадывает загадки, расследует убийства, допрашивает подозреваемых и просто раздает стиля пафосным голосом, и только изредка он прибегает к старому доброму ультранасилию (без причинения смертельных увечий, конечно). Его дневному альтер-его - Брюсу Уэйну - уделено преступно мало внимания, и эта немаловажная часть персонажа недостаточно раскрыта.
  К сожалению, детективная часть здесь очень ленивая. Все “плохие парни” дают зрителям недвусмысленные намеки относительно роли в этой истории буквально с первого же появления. Зрителям, но не Бэтмену, который бездействует, пока новое послание от Загадочника не протолкнет его насильно дальше по сюжету. Видно, Брюс прогуливал классы гениального детектива в этой вселенной.
  Зато в кои-то веки Бэтмен за сотню своих итераций в кино, мультфильмах и видеоиграх показался мне интересным ПЕРСОНАЖЕМ. Бэтмен всегда был второстепенным героем в своих собственных историях - декорацией для, прежде всего, интересных антагонистов и антигероев. Хотя в этом фильме есть и впечатляющий злодей в исполнении прекрасного Пола Дано, и загримированный до неузнаваемости мафиозник Колин Фаррелл, и вороватая, но от того не менее красивая Зои Кравиц, первую скрипку играет, как ни странно, Бэтмен. Не скажу, что с его сюжетной аркой сделали что-то гениальное, но хотя бы немного вышли из рамок питерпарковской мотивации в духе “преступники убили родителей = буду бороться с преступностью”. Как показывает практика того же “Джокера” Тодда Филлипса, этого достаточно, чтобы комунити начало хайп.
  Учитывая всё вышесказанное, а также хронометраж длинною в 3 часа, я не удивлюсь, если кому-то фильм покажется скучным или слишком приземленным. Но я возьму на себя смелость не согласиться - фильм выглядит и звучит просто великолепно, неплохо держит темп и, на мой взгляд, даже немного неряшливый сценарий не способен испортить такую качественную кинематографию.
  P.S. прокат у нас отменили, но не переживайте, весь фильм и так по привычке показали в трейлерах`,
      "https://phantom-marca.unidadeditorial.es/4db257c10291d4e28008e4715bce07b2/resize/828/f/webp/assets/multimedia/imagenes/2022/02/27/16459875620726.jpg",
      "Batman 2022",
      ["#rek", "#online", "#goodmovie"],
      "Barter"
    ),
    createPost(
      `просто хотел сказать, что Джон Сина - гигачад с неожиданными актерскими способностями, и Джеймс Ганн - гений, который может превратить даже скучных сайдовых болванчиков в обаятельных персонажей, а второсортный DCшный сериал на стриминге - в идеальное развлекательное шоу.`,
      "https://sun9-48.userapi.com/impg/JLFNboSWAIlFFMpONSgyD40XBi4AZ6AICxtWdg/Y3W1FqG0K1Q.jpg?size=1280x720&quality=96&sign=54685c6748a4d295473fdd1bcf8b7479&type=album",
      "Mira",
      ["#something"],
      "still me"
    ),
  ];
}

const listOfPosts = getListOfPosts();
const preloadedData = listOfPosts.map((post) => {
  const img = new Image();
  img.src = post.imgUrl;
  return img;
});

function Post() {
  const [postText, setPostText] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const maxLen = 600;
  const [name, setName] = useState("");
  const [tags, setTags] = useState([]);
  const [author, setAuthor] = useState("");
  const [animation, setAnimation] = useState(false);
  function nextPost() {
    const post = listOfPosts.pop();
    if (!post) {
      console.log("no new posts");
      return;
    }
    setPostText(post.postText);
    setName(post.name);
    setImgUrl(post.imgUrl);
    setAuthor(post.author);
    setTags(post.tags);
  }
  useEffect(() => {
    nextPost();
  }, []);
  return (
    <div>
      <h1
        className="text-center absolute -top-10"
        style={{ animation: "example 1s" }}
      >
        hello
      </h1>
      <div
        className="post flex flex-col rounded-2xl max-w-lg h-full 
      mx-auto my-5 text-sm bg-gradient-to-r from-slate-900 to-slate-800 p-4 text-white"
        style={{ animation: animation ? "example 1.5s" : "" }}
      >
        <div className="h-1/3">
          <img
            className="object-cover h-full w-full m-auto shadow"
            src={imgUrl}
          />
        </div>
        <div className="font-bold text-lg mt-3 text-center text-blue-300">
          {name}
        </div>
        <div className="mt-3 font-bold text-indigo-300">
          {author}: {tags.join(", ")}
        </div>
        <div className="">{postText.slice(0, maxLen) + "..."}</div>
        <div className="flex justify-around mt-auto">
          {/* <Heart /> */}
          <img className="w-1/12" src="./src/post/heart.svg" />

          <img className="w-1/12" src="./src/post/comment.svg" />

          <img
            className="w-1/12"
            src="./src/post/next.svg"
            onClick={() => {
              setTimeout(nextPost, 1100);
              setAnimation(true);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Post;
