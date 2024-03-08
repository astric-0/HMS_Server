import ThumbnailGenerator from "video-thumbnail-generator";

const generator = new ThumbnailGenerator({
	sourcePath: "../files/file_example_MP4_1280_10MG.mp4",
	thumbnailPath: "../files/",
});

generator.generateOneByPercent(90).then(console.log);
