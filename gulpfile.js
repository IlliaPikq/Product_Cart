import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import webp from 'gulp-webp';

gulp.task('convertAndMinify', async () => {
	return await gulp
		.src('./assets/*.{jpg,png}')
		.pipe(imagemin())
		.pipe(webp())
		.pipe(gulp.dest('./dist'));
});

gulp.task('minifyImages', async () => {
	return gulp
		.src('./assets/*.{jpg,png,webp}')
		.pipe(imagemin())
		.pipe(gulp.dest('./dist'));
}),

gulp.task('default', gulp.series('convertAndMinify'));
