<script lang="ts" context="module">
	export interface Image {
		image: string;
		imageAlt: string | null;
		description: string | null;
	}

	export interface ImagesBlock {
		images: Image[];
		disposition: string;
	}

	export interface Component {
		type: string;
		imagesBlock: ImagesBlock[];
		spacer: {
			padding?: string;
		};
	}
	export interface Data {
		date: string;
		title: string;
		subtitle: string;
		components: Component[];
	}
</script>
